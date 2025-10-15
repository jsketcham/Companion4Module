//const CHOICES_END = [
//	{ id: '', label: 'None' },
//	{ id: '\n', label: 'LF - \\n (Common UNIX/Mac)' },
//	{ id: '\r\n', label: 'CRLF - \\r\\n (Common Windows)' },
//	{ id: '\r', label: "CR - \\r (1970's RS232 terminal)" },
//	{ id: '\x00', label: 'NULL - \\x00 (Can happen)' },
//	{ id: '\n\r', label: 'LFCR - \\n\\r (Just stupid)' },
//]
import {constants} from './constants.js'
import {globalVars} from './variables.js'
//import {checkFeedbacks} from '@companion-module/base'
import _ from 'lodash'  // // when you set up the project: npm install lodash --save

export function tcpUdpTx(self,str){
    
    //console.log(str)
    
    const sendBuf = Buffer.from(str, 'utf8')

    if (self.config.prot == 'tcp') {
        self.log('debug', 'sending to ' + self.config.host + ': ' + sendBuf.toString())

        if (self.socket !== undefined && self.socket.isConnected) {
            self.socket.send(sendBuf)
        } else {
            self.log('debug', 'Socket not connected :(')
        }
    }

    if (self.config.prot == 'udp') {
        if (self.udp !== undefined) {
            self.log('debug', 'sending to ' + self.config.host + ': ' + sendBuf.toString())

            self.udp.send(sendBuf)
        }
    }
}
export function getActionDefinitions(self) {
    
    const actions = {}
    

        // AleDoc buttons
    actions.MIDI_TX = {
            name: 'MIDI transmit',
            options: [
                {
                    type: 'textinput',
                    id: 'id_midiTx',
                    label: 'Command:',
                    tooltip: `the MIDI string, in decimal, separated by commas`,
                    default: '176,1,1',
                    useVariables: true,
                },
                {
                    type: 'dropdown',
                    label: 'MIDI tx port',
                    id: 'id_midiTxPort',
                    default: '0',
                    tooltip: 'MIDI tx port',
                    choices: [
                    { id: '0', label: 'Accessory' },
                    { id: '1', label: 'Status' },
                    { id: '2', label: 'Remote' },
                    { id: '3', label: 'UFX' },
                    { id: '4', label: 'Control 1' },
                    { id: '5', label: 'Control 2' },
                    //{ id: 'somethingelse', label: 'I hate MIDI' }
                    ],
                    minChoicesForSearch: 0
                },
            ],
            callback: async (action, context) => {
                const cmd = unescape(await context.parseVariablesInString(action.options.id_midiTx))
                console.log(action.options)

                if (cmd != '' && cmd != 'undefined') {
                    
                    //console.log(action)
                    //console.log(constants)
                    //console.log(globalVars)
                    
                    let str = action.actionId + '\t' + action.options.id_midiTxPort + '\t' + cmd
                    
                    tcpUdpTx(self,str)
                }
            },
        },
    actions.trkLE = {
            //name: 'Preset action trkLE, do not use',  // comment out to exclude from dropdown
            options: [
                {
                    type: 'textinput',
                    id: 'value',    // matches
                },
                {
                    type: 'textinput',
                    id: 'text',
                },

            ],
            callback: (action) => {
                
                //console.log('trkLE action',action)
                //console.log('action.options', action.options)
                
                tcpUdpTx(self,action.options.value) // send the XKEY unit, key number, and shift
                let items = action.options.text.split('\\n')
                globalVars.currentTrack = items.pop()   //action.options.text;
                self.checkFeedbacks('currentTrack');    // interlock the track selectors here

            },
        },
    actions.trkTE = {
            //name: 'Preset action trkTE, do not use',  // comment out to exclude from dropdown
            options: [
                {
                    type: 'textinput',
                    id: 'value',    // matches
                },
                {
                    type: 'textinput',
                    id: 'text',
                },

            ],
            callback: (action) => {
                
                tcpUdpTx(self,action.options.value) // send the XKEY unit, key number, and shift
                //console.log('trkTE action',action)
                //console.log('action.options', action.options)

            },
        }
    actions.btnLE = {
        //name: 'Preset action btnLE, do not use',  // comment out to exclude from dropdown
        options: [
            {
                type: 'textinput',
                id: 'value',    // matches
            },
            {
                type: 'textinput',
                id: 'text',
            },

        ],
        callback: (action) => {
            
            tcpUdpTx(self,action.options.value) // send the XKEY unit, key number, and shift

        },
    }
    actions.btnTE = {
        //name: 'Preset action btnTE, do not use',  // comment out to exclude from dropdown
        options: [
            {
                type: 'textinput',
                id: 'value',    // matches
            },
            {
                type: 'textinput',
                id: 'text',
            },

        ],
        callback: (action) => {
            
            tcpUdpTx(self,action.options.value) // send the XKEY unit, key number, and shift

        },
    }
    actions.dialRight = {
            //name: 'Preset action dialRight, do not use',  // comment out to exclude from dropdown
            options: [
                {
                    type: 'textinput',
                    id: 'value',    // matches
                },
                {
                    type: 'textinput',
                    id: 'text',
                },

            ],
            callback: (action) => {
                
                tcpUdpTx(self,action.options.value) // send the XKEY unit, key number, and shift

            },
    }
    actions.dialLeft = {
            //name: 'Preset action dialLeft, do not use',  // comment out to exclude from dropdown
            options: [
                {
                    type: 'textinput',
                    id: 'value',    // matches
                },
                {
                    type: 'textinput',
                    id: 'text',
                },

            ],
            callback: (action) => {
                
                console.log('dialLeft')
                tcpUdpTx(self,action.options.value) // send the XKEY unit, key number, and shift

            },
    }
    actions.none = {
        //name: 'Preset no-op, do not use', // comment out to exclude from dropdown
        options: [],
        callback : (action) => {}
    }

    return actions
}
