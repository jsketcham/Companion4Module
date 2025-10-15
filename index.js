import { InstanceBase, InstanceStatus, runEntrypoint, TCPHelper, UDPHelper } from '@companion-module/base'
import { ConfigFields } from './src/config.js'
import { getActionDefinitions } from './src/actions.js'
import {constants} from './src/constants.js'
import {getVariableDefinitions,globalVars} from './src/variables.js'
import {getFeedbackDefinitions} from './src/feedbacks.js'
import {getPresetDefinitions} from './src/presets.js'
import {tcpUdpTx} from './src/actions.js'

//const UpdateFeedbacks = require('./src/feedbacks.js')

//const constants = require('./src/constants')
class BarInstance extends InstanceBase {
    
	async init(config) {
        this.log('info','BarInstance init ')
		this.config = config
        this.config.prot = 'tcp'    // always tcp

		this.setActionDefinitions(getActionDefinitions(this))
        this.setVariableDefinitions(getVariableDefinitions(this)) // these are values we expose to the user, we do not read them back
        this.setVariableValues({'armedTrack': -1},)   // initial values, can be multiple values
        this.setFeedbackDefinitions(getFeedbackDefinitions(this))
        this.setPresetDefinitions(getPresetDefinitions(this))
        
        //console.log('exposed value of armedTrack: ',this.getVariableValue('armedTrack') )

		await this.configUpdated(config)
	}

	async configUpdated(config) {
		if (this.udp) {
			this.udp.destroy()
			delete this.udp
		}

		if (this.socket) {
			this.socket.destroy()
			delete this.socket
		}

		this.config = config

		if (this.config.prot == 'tcp') {
			this.init_tcp()
//            console.log("init_tcp_variables")
//			this.init_tcp_variables()
		}

		if (this.config.prot == 'udp') {
			this.init_udp()

			this.setVariableDefinitions([])
		}
	}

	async destroy() {
		if (this.socket) {
			this.socket.destroy()
		} else if (this.udp) {
			this.udp.destroy()
		} else {
			this.updateStatus(InstanceStatus.Disconnected)
		}
	}

	// Return config fields for web config
	getConfigFields() {
		return ConfigFields
	}

	init_udp() {
		if (this.udp) {
			this.udp.destroy()
			delete this.udp
		}

		this.updateStatus(InstanceStatus.Connecting)

		if (this.config.host) {
			this.udp = new UDPHelper(this.config.host, this.config.port)
			this.updateStatus(InstanceStatus.Ok)

			this.udp.on('error', (err) => {
				this.updateStatus(InstanceStatus.ConnectionFailure, err.message)
				this.log('error', 'Network error: ' + err.message)
			})

			// If we get data, thing should be good
			this.udp.on('listening', () => {
				this.updateStatus(InstanceStatus.Ok)
			})

			this.udp.on('status_change', (status, message) => {
				this.updateStatus(status, message)
			})
		} else {
			this.updateStatus(InstanceStatus.BadConfig)
		}
	}

	init_tcp() {
        this.log('info','init_tcp')
		if (this.socket) {
			this.socket.destroy()
			delete this.socket
		}

		this.updateStatus(InstanceStatus.Connecting)

		if (this.config.host) {
			this.socket = new TCPHelper(this.config.host, this.config.port)

			this.socket.on('status_change', (status, message) => {
				this.updateStatus(status, message)
			})

			this.socket.on('error', (err) => {
				this.updateStatus(InstanceStatus.ConnectionFailure, err.message)
				this.log('error', 'Network error: ' + err.message)
			})

			this.socket.on('data', (data) => {
                //this.log('info','data')
                //console.log('rx: ',data.toString())
                //PARSE INCOMING DATA
                var response_array = data.toString().trim().split('\n')    // trim whitespace, one AleDoc feedback per line of text
                //console.log("did get response_array, length ", response_array.length)
    //                this.log('debug', 'RESPONSE ARRAY =' + response_array)
                //console.log('RESPONSE ARRAY = ' + response_array)
                
                for(let i = 0; i < response_array.length; i++){
                    
                    var cmdOperand = response_array[i].includes('\t') ? response_array[i].split('\t') : response_array[i].split(' ')
                    
                    console.log("cmdOperand ",cmdOperand)
                    
                    switch(String(cmdOperand[0])){
                            
                        case 'filterItems':

                        //this.checkFeedbacks('midiRx')   // does not fill the table
                        //console.log('case filterItems')
                        let keys = Object.keys(globalVars.filterItems)
                                                                        
                        if(keys != undefined){
                            
                            let msg = 'filterItems'

                            while(keys.length > 0){
                                let key = keys.pop()
                                msg = msg + '\n' + key + '\t' + globalVars.filterItems[key]
                            }
                            
                            tcpUdpTx(this,msg)
                            
                       }

                        break

                        case 'midiRx':
                        
                        console.log('case midiRx')
                        
                        globalVars.midiRx = cmdOperand[2]
                        globalVars.midiRxPort = cmdOperand[1]
                        this.checkFeedbacks('midiRx')
                        
                        break
                            
                        case 'Track':
                        
                        globalVars.currentTrack = cmdOperand[1]    // '2'
                        //console.log('did set current track to ',globalVars.currentTrack)
                        this.setVariableValues({'armedTrack': globalVars.currentTrack},)
                        this.checkFeedbacks('currentTrack') // called for each track, interlocks the indicators
                            
                        break
                            
                        case 'status':
                        
                        cmdOperand = cmdOperand[1].split(',')
                        
                        if(cmdOperand.length >= 4){
                            
                            let item = globalVars.status[cmdOperand[0]]
                            
                            if(!item || typeof(item) == 'undefined'){
                                console.log('indicator undefined:',cmdOperand[0])
                                break
                            }

//                            console.log('will set  globalVars.status')
                            item.text = cmdOperand[1]
                            item.color = cmdOperand[2]
                            item.bgcolor = cmdOperand[3]
//                            console.log('did set  globalVars.status')

                            // key,text,color,bgcolor
                            this.checkFeedbacks('status')
                        }
                        
                        break
                            
                        case 'led':
                        // led unitId,key,on    key is blue, key+80 is red
                        
                        let rowCol = cmdOperand[1].split(',')
                        
                        //console.log('rowCol',rowCol)

                        var keyNumber = parseInt(rowCol[1])
//                        let keyStr = `${keyNumber % 80}`
                        
                        // 2.00.00 add missing table entries
                        if(typeof(globalVars.leds[rowCol[0]]) == 'undefined'){
                            
                            globalVars.leds[rowCol[0]] = {}
                            //console.log('adding leds for unitId',rowCol[0])
                        }
                        
                        if(typeof(globalVars.leds[rowCol[0]][keyNumber]) == 'undefined'){
                            
                            globalVars.leds[rowCol[0]][keyNumber] = {"r":false,"b":false}
                            //console.log('adding leds for unitId',rowCol[0],'key',keyStr)
                        }
                        
                        let item = globalVars.leds[rowCol[0]][keyNumber]
                        
                        if(keyNumber < 80){
                            item['b'] = rowCol[2] == 'true'
                        }else{
                            
                            item['r'] = rowCol[2] == 'true'
                            
                            if(typeof(rowCol[3]) != 'undefined'){
                                
                                item['b'] = rowCol[3] == 'true'   // can set both r, b if key is < 80
                                
                            }
                        }

                        this.checkFeedbacks('led')  // 242 also has xkled, but has no xkled feedbacks

                        break
                            
                        case 'lpMini':
                        
                        cmdOperand = cmdOperand[1].split('\t')
                        
                        for(let i = 0; i < cmdOperand.length; i++){
                            
                            let item = cmdOperand[i].split(',')   // index,value
                            
                            if(item.length == 2){
                                
                                let index = item[0];
                                globalVars.lpMini[index] = item[1];
                                                                
                            }
                        }

                        this.checkFeedbacks('lpMini')
                            
                        break
                        
                        case 'btn':
                        
                        // checked with 'node utils'
                        cmdOperand.shift()
//                        console.log('with command removed',cmdOperand)
                        let msg = cmdOperand.join(' ')
//                        console.log('joined with blank',msg)
                        cmdOperand = msg.split(',')
//                        console.log('split on comma',cmdOperand)
                        let key = cmdOperand[0]
                        let dict = {'fg':cmdOperand[1],'bg':cmdOperand[2],'txt':cmdOperand[3]}  // missing items are 'undefined'

                        globalVars.btn[key] = dict
                        //console.log('globalVars.btn[key] after set',globalVars.btn[key])

                        this.checkFeedbacks('btn')
                        
                        break
                            
                        case 'sampleRate':
                                                
                        globalVars.sampleRate = cmdOperand[1]
                        this.checkFeedbacks('sampleRate')
                        
                        break
                        
                        case 'rehRecPb':
                        globalVars.rehRecPb = cmdOperand[1]
                        this.checkFeedbacks('rehRecPb')
                        break

                        case 'monitor':
                        globalVars.monitor = cmdOperand[1]
                        this.checkFeedbacks('monitor')
                        break

                        case 'aheadInPast':
                        globalVars.aheadInPast = cmdOperand[1]
                        this.checkFeedbacks('aheadInPast')
                        break

                        case 'prerollIndex':
                        //console.log('will do feedback preroll');
                        globalVars.prerollIndex = cmdOperand[1]
                        this.checkFeedbacks('preroll')
                        break

                        case 'beepsTrim':
                        //console.log('will do feedback beepsTrim');
                        globalVars.beepsTrim = cmdOperand[1]
                        this.checkFeedbacks('beepsTrim')
                        break
                            
                        case 'playStop':
                        
                        globalVars.playStop = cmdOperand[1]
                        this.setVariable('playStop', globalVars.playStop)

                        break

                        default:
                        break


                    }
                }

			})
		} else {
			this.updateStatus(InstanceStatus.BadConfig)
		}
	}

}

runEntrypoint(BarInstance, [])
