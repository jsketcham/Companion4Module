import { combineRgb } from '@companion-module/base'
import {getVariableDefinitions,globalVars} from './variables.js'
import {constants} from './constants.js'
import {tcpUdpTx} from './actions.js'

var AIP_RED_KEY       = constants.AIP_RED_KEY
var AIP_GREEN_KEY     = constants.AIP_GREEN_KEY
var AIP_GREEN_DIM_KEY = constants.AIP_GREEN_DIM_KEY
var AIP_AMBER_KEY     = constants.AIP_AMBER_KEY
var AIP_OFF_KEY       = constants.AIP_OFF_KEY
var AIP_AMBER_DIM_KEY = constants.AIP_AMBER_DIM_KEY
var AIP_YELLOW_KEY    = constants.AIP_YELLOW_KEY
var AIP_RED_BLINK_KEY = constants.AIP_RED_BLINK_KEY

var AIP_RED           = constants.AIP_RED
var AIP_GREEN         = constants.AIP_GREEN
var AIP_BLUE          = constants.AIP_BLUE
var AIP_GREEN_DIM     = constants.AIP_GREEN_DIM
var AIP_AMBER         = constants.AIP_AMBER
var AIP_OFF           = constants.AIP_OFF
var AIP_AMBER_DIM     = constants.AIP_AMBER_DIM
var AIP_YELLOW        = constants.AIP_YELLOW
var AIP_WHITE         = constants.AIP_WHITE
var AIP_BLACK         = constants.AIP_BLACK
var btnOffColor       = constants.btnOffColor
var btnWhiteColor     = constants.btnWhiteColor

export  function getFeedbackDefinitions(self) {
    var feedbacks = {}
    
    feedbacks['midiRx'] = {

//             type: 'boolean', // Feedbacks can either a simple boolean, or can be an 'advanced' style change (until recently, all feedbacks were 'advanced')
        type: 'advanced',
        name: 'rx MIDI sets/clears indicator',  // include to show this in the button/feedback dropdown
        description: 'MIDI indicators',         // descriptive notes, shows only if there is a name
        options: [

          {
              type: 'dropdown',
              label: 'MIDI rx port',
              id: 'midiRxPort',
              default: '0',
              tooltip: 'MIDI rx port',
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
          {
              // Later you can access the value of the textfield with var userInput = action.options.midiMessageSet.

              type: 'textinput',
              label: 'MIDI message to set indicator',
              id: 'midiMessageSet',
              default: '176,1,1',
              tooltip: 'the MIDI string, in decimal, separated by commas',
              // ^[0-9]*$
              regex: '/^[0-9,]*$/'
          },
          {
              // Later you can access the value of the textfield with var userInput = action.options.midiMessageClear.

              type: 'textinput',
              label: 'MIDI message to clear indicator',
              id: 'midiMessageClear',
              default: '176,1,2',
              tooltip: 'the MIDI string, in decimal, separated by commas',
              // ^[0-9]*$
              regex: '/^[0-9,]*$/'
          },
          {
          type: 'colorpicker',
          label: 'MIDI ON text color',
          id: 'fg',
          default: 0x404040,

          },
          {
          type: 'colorpicker',
          label: 'MIDI ON background color',
          id: 'bg',
          default: 0x00c000,

          },
        ],
        callback: (feedback) => {
            
            console.log('feedback midiRx',feedback)
            
            //console.log('feedback midiRx','this.sendToHost == undefined',this.sendToHost == undefined)

            // send filter items to host if they change
            let filterItem = feedback.options.midiRxPort + '\t' + feedback.options.midiMessageSet + '\t' + feedback.options.midiMessageClear

            if(!globalVars.filterItems[feedback.id]){

                console.log('adding filterItems[',feedback.id,']')
                globalVars.filterItems[feedback.id] = filterItem    // initializing, don't send change message

            }else if(globalVars.filterItems[feedback.id] != filterItem){

                globalVars.filterItems[feedback.id] = filterItem
                
                var str = `filterItemChanged\t${feedback.id}\t${filterItem}`
                
                tcpUdpTx(self,str)

            }

            if(globalVars.midiRxPort == feedback.options.midiRxPort){

                if(globalVars.midiRx == feedback.options.midiMessageSet){

                    globalVars.feedbacks[feedback.id] = '1'

               }else if (globalVars.midiRx == feedback.options.midiMessageClear){

                   globalVars.feedbacks[feedback.id] = '0'
              }
           }

            if(globalVars.feedbacks[feedback.id] && globalVars.feedbacks[feedback.id] == '1'){

                // if we don't return a colorpicker, the 'action' colors are used (i.e. the 'off' colors)
                return {
                    color: feedback.options.fg,
                    bgcolor: feedback.options.bg
                };
            }
        },
    }

    feedbacks['currentTrack'] = {
        type: 'boolean', // Feedbacks can either a simple boolean, or can be an 'advanced' style change (until recently, all feedbacks were 'advanced')
        // comment out name: and description: to have it out of the feedback dropdown, still works for internal feedback
       //name: 'Track selected',    // comment out to not have in the button/feedback dropdown
        description: 'do not use, AleDoc internal feedback',
        label: 'If this track is currently selected, set button background color',
        options: [
            {
                type: 'textinput',  // see https://bitfocus.github.io/companion-module-base/interfaces/CompanionInputFieldBase.html
                id: 'text',    // matches preset feedback options
            },
        ],    // required, can be empty
        callback: (feedback) => {
            // compare TRACK value to our textinput, interlocks the track selector indicators
            //let items = feedback.options.text.split('\\n')    // compare the track numbers
            let result = globalVars.currentTrack == parseInt(feedback.options.text)
            console.log('currentTrack feedback',feedback.options.text,globalVars.currentTrack,result)
            return result // highlight the selected track

        },
    }
 
    feedbacks['led'] = {

        type: 'advanced', // Feedbacks can either a simple boolean, or can be an 'advanced' style change (until recently, all feedbacks were 'advanced')
       // name: 'led',  // comment out to not have in the button/feedback dropdown
        description: 'do not use, AleDoc internal feedback',
        label: 'set button text, color, bgcolor',
        options: [
            {
                type: 'textinput',
                id: 'unitId',    // matches preset feedback options
            },
            {
                type: 'textinput',
                id: 'key',    // matches preset feedback options
            },
            {
                type: 'number',
                id: 'selectedColor',    // matches preset feedback options
            },
            {
                type: 'number',
                id: 'selectedBgColor',    // matches preset feedback options
            },
        ],    // required, can be empty
        callback: function (feedback) {
            
            // emulate XKEY leds, red and blue
            // for actual XKEY, red > 127 is RED ON, blue > 127 is BLUE ON
            //console.log('led feedback:',feedback)
            
            // 2.00.00 add missing table entries
            if(typeof(globalVars.leds[feedback.options.unitId]) == 'undefined'){
                
                globalVars.leds[feedback.options.unitId] = {}
                //console.log('adding leds for unitId',feedback.options.unitId)
            }
            
            if(typeof(globalVars.leds[feedback.options.unitId][feedback.options.key]) == 'undefined'){
                
                globalVars.leds[feedback.options.unitId][feedback.options.key] = {"r":false,"b":false}
                //console.log('adding leds for unitId',rowCol[0],'key',keyStr)
            }
            
            // < 80 blue, >= 80 red, for non-XKEY we are true/false using 'b' | 'r'
            // so that we can have more than 80 items in a unit_x_dict
            var result = {} // no change to fg,bg
            
            if(globalVars.leds[feedback.options.unitId][feedback.options.key]['b'] || globalVars.leds[feedback.options.unitId][feedback.options.key]['r']){
                
                result.bgcolor = feedback.options.selectedBgColor
                result.color = feedback.options.selectedColor
            }
            
            return result

        },
    }
    feedbacks['lpMini'] = {

        type: 'advanced', // Feedbacks can either a simple boolean, or can be an 'advanced' style change (until recently, all feedbacks were 'advanced')
       // name: 'lpMini',   // comment out to not have in the button/feedback dropdown
        description: 'do not use, AleDoc internal feedback',
        label: 'set button bgcolor, text',
        options: [
            {
                type: 'textinput',
                id: 'text',    // matches preset feedback options
            },
            {
                type: 'textinput',
                id: 'key',    // matches preset feedback options
            },

        ],    // required, can be empty
        callback: function (feedback) {
            
            var item = globalVars.lpMini[feedback.options.key]

            if(!item || typeof(item) == 'undefined'){
                
                //console.log('adding lpMini entry for key',feedback.options.key)
                globalVars.lpMini[feedback.options.key] = AIP_OFF_KEY
                item = AIP_OFF_KEY
            }
            
            let text = feedback.options.text
            
            try{
                if(text.includes('Playback') && globalVars.leds['9']['40']){
                    //console.log('includes Playback');
                    text = text.replace('Playback','PB/Comp');
                    //console.log(text);
                }
            }catch(error){
                console.log(error)
            }
            
            /*
             interface CompanionAdvancedFeedbackResult {
                 alignment?: CompanionAlignment;
                 bgcolor?: number;
                 color?: number;
                 imageBuffer?: string | Uint8Array<ArrayBufferLike>;
                 imageBufferEncoding?: CompanionImageBufferEncoding;
                 imageBufferPosition?: CompanionImageBufferPosition;
                 png64?: string;
                 pngalignment?: CompanionAlignment;
                 show_topbar?: boolean;
                 size?: CompanionTextSize;
                 text?: string;
                 textExpression?: boolean;
             }
             */
            
            var color = AIP_BLACK
            var bgcolor = AIP_WHITE // defaults

            switch(item){
                case AIP_RED_KEY:       bgcolor = AIP_RED; break
                case AIP_GREEN_KEY:     bgcolor = AIP_GREEN; break
                case AIP_GREEN_DIM_KEY: bgcolor = AIP_GREEN_DIM; color = AIP_WHITE; break
                case AIP_AMBER_KEY:     bgcolor = AIP_AMBER; break
                case AIP_AMBER_DIM_KEY: bgcolor = AIP_AMBER_DIM; color = AIP_WHITE; break
                case AIP_YELLOW_KEY:    bgcolor = AIP_YELLOW; break
                case AIP_RED_BLINK_KEY: bgcolor = AIP_WHITE; color = AIP_BLACK; break // TODO: blinker, temp white button
                default:                bgcolor = AIP_OFF; color = AIP_WHITE; break
            }
            
            var result = {
                // the fields we need for this feedback...
                  text: text,    // this does appear in 'Edit Button/Feedback' if we enable text feedback
                  bgcolor: bgcolor,//combineRgb(255, 0, 0),
                  color: color,  // black text for colored buttons
              }

            return result

        },

    }
    
    feedbacks['btn'] = {

        type: 'advanced', // Feedbacks can either a simple boolean, or can be an 'advanced' style change (until recently, all feedbacks were 'advanced')
        //name: 'btn',  // comment out to not have in the button/feedback dropdown
        description: 'do not use, AleDoc internal feedback',
        label: 'set button fg, bg, text',
        options: [
            {
                type: 'textinput',
                id: 'unitId',    // matches preset feedback options
            },
            {
                type: 'textinput',
                id: 'key',    // matches preset feedback options
            },

        ],    // required, can be empty
        callback: function (feedback) {
            
            // a feedback where the fg color, bg color, and text can be set (very general purpose)
            /*
             interface CompanionAdvancedFeedbackResult {
                 alignment?: CompanionAlignment;
                 bgcolor?: number;
                 color?: number;
                 imageBuffer?: string | Uint8Array<ArrayBufferLike>;
                 imageBufferEncoding?: CompanionImageBufferEncoding;
                 imageBufferPosition?: CompanionImageBufferPosition;
                 png64?: string;
                 pngalignment?: CompanionAlignment;
                 show_topbar?: boolean;
                 size?: CompanionTextSize;
                 text?: string;
                 textExpression?: boolean;
             }
             */

            
            //console.log('btn feedback',feedback)
            
            var result = {
                // the fields we need for this feedback...
                  //text: 'missing\\ntext',    // this does appear in 'Edit Button/Feedback' if we enable text feedback
                  bgcolor: btnOffColor,//combineRgb(255, 0, 0),
                  color: AIP_WHITE,  // black text for colored buttons
              }

            //return advancedResult    // temp

            let btnKey = `${feedback.options.unitId}_${feedback.options.key}`
            console.log('btn feedback key',btnKey)
            var item = globalVars.btn[btnKey]

            if(item && typeof(item) != 'undefined'){
                
                if(item['fg'] != undefined){
                    result.color = item['fg']
                }else{
                    console.log('fg undefined for btn:',feedback.options.key)
                }
                if(item['bg'] != undefined){
                    result.bgcolor = item['bg']
                }else{
                    console.log('bg undefined for btn:',feedback.options.key)
                }
                if(item['txt'] != undefined){
                    result.text = item['txt']
                }else{
                    console.log('txt undefined for btn:',feedback.options.key)
                }
                
                //return true
                
            }
            return result

        },

    }

    feedbacks['monitor'] = {

        type: 'boolean', // Feedbacks can either a simple boolean, or can be an 'advanced' style change (until recently, all feedbacks were 'advanced')
        //name: 'monitor',  // comment out to not have in the button/feedback dropdown
        description: 'do not use, AleDoc internal feedback',
        label: 'interlocked monitor indicators',
        options: [
            {
                type: 'number',
                id: 'shift',    // matches preset feedback options
            },
            {
                type: 'textinput',
                id: 'key',    // matches preset feedback options
            },

        ],    // required, can be empty
        callback: function (feedback) {

            switch(globalVars.monitor){
                case '0': return (feedback.options.key == '64' && feedback.options.shift == false)
                case '1': return (feedback.options.key == '72' && feedback.options.shift == false)
                case '2': return (feedback.options.key == '65' && feedback.options.shift == false)
                case '3': return (feedback.options.key == '73' && feedback.options.shift == false)
                case '4': return (feedback.options.key == '65' && feedback.options.shift == true)
                case '5': return (feedback.options.key == '73' && feedback.options.shift == true)
                default: return false
            }
        },

    }
    
    feedbacks['rehRecPb'] = {

        type: 'advanced', // Feedbacks can either a simple boolean, or can be an 'advanced' style change (until recently, all feedbacks were 'advanced')
        //name: 'mode', // comment out to not have in the button/feedback dropdown
        description: 'do not use, AleDoc internal feedback',
        label: 'interlocked mode indicators',
        options: [
            {
                type: 'number',
                id: 'shift',    // matches preset feedback options
            },
            {
                type: 'textinput',
                id: 'key',    // matches preset feedback options
            },
            {
                type: 'number',
                id: 'selectedBgColor',    // matches preset feedback options
            },
            {
                type: 'number',
                id: 'selectedColor',    // matches preset feedback options
            },

        ],    // required, can be empty
        callback: function (feedback) {
            
            var result = {
                color: btnWhiteColor,
                bgcolor: btnOffColor,
            }
            
            //console.log('rehRecPb',feedback.options,globalVars.rehRecPb)

            switch(globalVars.rehRecPb){
                case '0': if(feedback.options.key == '43' && feedback.options.shift == false){
                    console.log('setting text to rehearse')
                    result.text = "Rehearse"
                    result.bgcolor = feedback.options.selectedBgColor
                    result.color = feedback.options.selectedColor
                    }
                    break
                case '1': if(feedback.options.key == '44' && feedback.options.shift == false){
                    result.text = "Record"

                    result.bgcolor = feedback.options.selectedBgColor
                    result.color = feedback.options.selectedColor
                   }
                    break
                case '2': if(feedback.options.key == '45' && feedback.options.shift == false){
                    result.text = "Playback"
                    result.bgcolor = feedback.options.selectedBgColor
                    result.color = feedback.options.selectedColor
                    }
                    break
                case '4': if(feedback.options.key == '43' && feedback.options.shift == false){
                    result.text = "Rehearse\\nPending"
                    result.bgcolor = feedback.options.selectedBgColor
                    result.color = feedback.options.selectedColor
                    }
                    break
                case '5': if(feedback.options.key == '44' && feedback.options.shift == false){
                    result.text = "Record\\nPending"
                    result.bgcolor = feedback.options.selectedBgColor
                    result.color = feedback.options.selectedColor
                    }
                    break
                case '6': if(feedback.options.key == '45' && feedback.options.shift == false){
                    result.text = "Playback\\nPending"
                    result.bgcolor = feedback.options.selectedBgColor
                    result.color = feedback.options.selectedColor
                    }
                    break
                default: break
            }
            console.log('result ', result)
            
            return result
        },

    }
    feedbacks['aheadInPast'] = {

        type: 'boolean', // Feedbacks can either a simple boolean, or can be an 'advanced' style change (until recently, all feedbacks were 'advanced')
        //name: 'Interlock Ahead,In, Past',
        description: 'interlocked Ahead/In/Past indicators',
        options: [
            {
                type: 'number',
                id: 'shift',    // matches preset feedback options
            },
            {
                type: 'textinput',
                id: 'key',    // matches preset feedback options
            },
        ],    // required, can be empty
        
        callback: function (feedback) {

            var result = false

            switch(globalVars.aheadInPast){
                case '0': return (feedback.options.key == '43' && feedback.options.shift == true)
                case '1': return (feedback.options.key == '44' && feedback.options.shift == true)
                case '2': return (feedback.options.key == '45' && feedback.options.shift == true)
                default: return false
            }
        },

    }
    feedbacks['sampleRate'] = {

        type: 'boolean', // Feedbacks can either a simple boolean, or can be an 'advanced' style change (until recently, all feedbacks were 'advanced')
        //name: 'Interlock sample rate',
        description: 'interlocked sample rate indicators',
        options: [
            {
                type: 'textinput',
                id: 'key',    // matches preset feedback options
            },
        ],    // required, can be empty
        callback: function (feedback) {

            var result = false

            switch(globalVars.sampleRate){
                case '0': return (feedback.options.key == '83')
                case '1': return (feedback.options.key == '84')
                case '2': return (feedback.options.key == '85')
                default: return false
            }
        },

    }

    feedbacks['preroll'] = {

        type: 'boolean', // Feedbacks can either a simple boolean, or can be an 'advanced' style change (until recently, all feedbacks were 'advanced')
        //name: 'Interlock preroll indicators',
        description: 'interlocked preroll indicators',
        options: [
            {
                type: 'textinput',
                id: 'key',    // matches preset feedback options
            },

        ],    // required, can be empty
        callback: function (feedback) {

            console.log('preroll',feedback);

            var result = false

            switch(feedback.options.key){
                case '1': return (globalVars.prerollIndex == '0')
                case '9': return (globalVars.prerollIndex == '1')
                case '17': return (globalVars.prerollIndex == '2')
                case '25': return (globalVars.prerollIndex == '3')
                case '33': return (globalVars.prerollIndex == '4')
                default: return false
            }
        },

    }

    feedbacks['beepsTrim'] = {

        type: 'advanced', // Feedbacks can either a simple boolean, or can be an 'advanced' style change (until recently, all feedbacks were 'advanced')
        //name: 'indicate if beeps are offset',
        description: 'interlocked trim indicators',
        options: [
            {
                type: 'textinput',
                id: 'key',    // matches preset feedback options
            },
            {
                type: 'number',
                id: 'selectedBgColor',    // matches preset feedback options
            },
            {
                type: 'number',
                id: 'selectedColor',    // matches preset feedback options
            },
        ],    // required, can be empty
        callback: function (feedback) {

            console.log('beepsTrim',parseInt(globalVars.beepsTrim),feedback)
            
            var result = {}

            switch(feedback.options.key){
                case '17': if(parseInt(globalVars.beepsTrim) < 0){
                        result.text = 'Beeps\\n' + globalVars.beepsTrim
                        result.bgcolor = feedback.options.selectedBgColor
                        result.color = feedback.options.selectedColor
                    }
                    break
                case '25': if(parseInt(globalVars.beepsTrim) > 0){
                        result.text = 'Beeps\\n+' + globalVars.beepsTrim
                        result.bgcolor = feedback.options.selectedBgColor
                        result.color = feedback.options.selectedColor
                    }
                    break
                default: break
            }
            console.log('beepsTrim result',result)

            return result
        },

    }

    return feedbacks
}

