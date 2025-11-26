import {constants} from './constants.js'
import {globalVars} from './variables.js'
import { combineRgb } from '@companion-module/base'

// so that we don't have to do constants.xxx
var btnWhiteColor = constants.btnWhiteColor
var AIP_RED = constants.AIP_RED
var AIP_AMBER = constants.AIP_AMBER
var btnOffColor = constants.btnOffColor
var btnOnColor = constants.btnOnColor
var aGreenColor = constants.aGreenColor
var powderBlue = constants.powderBlue
var aBlueColor = constants.aBlueColor
var aYellowColor = constants.aYellowColor
var aRedColor = constants.aRedColor
var cycleBlue = constants.cycleBlue

const trackSelection = [
    {text: ' 1',    unitId: '9',    key: '0',  action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: ' 2',    unitId: '9',    key: '1',  action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: ' 3',    unitId: '9',    key: '2',  action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: ' 4',    unitId: '9',    key: '3',  action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: ' 5',    unitId: '9',    key: '4',  action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: ' 6',    unitId: '9',    key: '5',  action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: ' 7',    unitId: '9',    key: '6',  action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: ' 8',    unitId: '9',    key: '7',  action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: ' 9',    unitId: '9',    key: '8',  action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '10',   unitId: '9',    key: '9',  action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '11',   unitId: '9',    key: '10', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '12',   unitId: '9',    key: '11', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '13',   unitId: '9',    key: '12', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '14',   unitId: '9',    key: '13', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '15',   unitId: '9',    key: '14', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '16',   unitId: '9',    key: '15', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},

    {text: '17',   unitId: '9',    key: '16', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '18',   unitId: '9',    key: '17', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '19',   unitId: '9',    key: '18', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '20',   unitId: '9',    key: '19', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '21',   unitId: '9',    key: '20', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '22',   unitId: '9',    key: '21', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '23',   unitId: '9',    key: '22', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '24',   unitId: '9',    key: '23', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '25',   unitId: '9',    key: '24', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '26',   unitId: '9',    key: '25', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '27',   unitId: '9',    key: '26', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '28',   unitId: '9',    key: '27', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '29',   unitId: '9',    key: '28', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '30',   unitId: '9',    key: '29', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '31',   unitId: '9',    key: '30', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    {text: '32',   unitId: '9',    key: '31', action: 'trkLE', release_action : 'trkTE',  feedback:'currentTrack',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : 'auto'},
    
]
const numberPad = [
    {text: '00',    unitId: '8',    key: '261', action: 'btnLE',    release_action : 'none',    feedback:'none',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '24'},
    {text: '0',     unitId: '8',    key: '15',  action: 'btnLE',    release_action : 'none',    feedback:'none',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '24'},
    {text: '1',     unitId: '8',    key: '14',  action: 'btnLE',    release_action : 'none',    feedback:'none',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '24'},
    {text: '2',     unitId: '8',    key: '22',  action: 'btnLE',    release_action : 'none',    feedback:'none',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '24'},
    {text: '3',     unitId: '8',    key: '30',  action: 'btnLE',    release_action : 'none',    feedback:'none',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '24'},
    {text: '4',     unitId: '8',    key: '13',  action: 'btnLE',    release_action : 'none',    feedback:'none',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '24'},
    {text: '5',     unitId: '8',    key: '21',  action: 'btnLE',    release_action : 'none',    feedback:'none',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '24'},
    {text: '6',     unitId: '8',    key: '29',  action: 'btnLE',    release_action : 'none',    feedback:'none',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '24'},
    {text: '7',     unitId: '8',    key: '12',  action: 'btnLE',    release_action : 'none',    feedback:'none',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '24'},
    {text: '8',     unitId: '8',    key: '20',  action: 'btnLE',    release_action : 'none',    feedback:'none',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '24'},
    {text: '9',     unitId: '8',    key: '28',  action: 'btnLE',    release_action : 'none',    feedback:'none',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '24'},
    {text: 'GO TO', unitId: '8',    key: '31',  action: 'btnLE',    release_action : 'none',    feedback:'none',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'STO',   unitId: '8',    key: '37',  action: 'btnLE',    release_action : 'none',    feedback:'none',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    
    {text: 'Hour 0',    unitId: '8',    key: '15',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Hour 1',    unitId: '8',    key: '14',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Hour 2',    unitId: '8',    key: '22',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Hour 3',    unitId: '8',    key: '30',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Hour 4',    unitId: '8',    key: '13',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Hour 5',    unitId: '8',    key: '21',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Hour 6',    unitId: '8',    key: '29',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Hour 7',    unitId: '8',    key: '12',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Hour 8',    unitId: '8',    key: '20',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Hour 9',    unitId: '8',    key: '28',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
]

const status = [
    // put LED items here so that we can reduce traffic by sending only setLEDForUnitID:9
    {text: 'Comp Arm',                      unitId: '9',    key: '32',  action: 'btnLE',    release_action : 'none',    feedback:'led', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: 0xff0000,size : '18'},
    {text: 'Overlay',                       unitId: '9',    key: '35',  action: 'btnLE',    release_action : 'btnTE',   feedback:'led', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: 0x0000ff,size : '18'},
    {text: 'XKey Shift',                    unitId: '8',    key: '7',   action: 'btnLE',    release_action : 'btnTE',   feedback:'led', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: 0x0000ff,size : '14'},
    {text: 'Check\\nAutoslate\\nSwitching', unitId: '9',    key: '75',  action: 'btnLE',    release_action : 'btnTE',   feedback:'led', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '14'},
]
const picture = [
    // put LED items here so that we can reduce traffic by sending only setLEDForUnitID:9
    {text: 'Picture\\nAlways On',   unitId: '9',    key: '70',  action: 'btnLE',    release_action : 'none',    feedback:'led', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text: 'Picture\\nFade In',     unitId: '9',    key: '71',  action: 'btnLE',    release_action : 'none',    feedback:'led', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text: 'Pic Blk\\nCue\\nBlk',   unitId: '9',    key: '72',  action: 'btnLE',    release_action : 'btnTE',   feedback:'led', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text: 'Hide Pix',              unitId: '9',    key: '33',  action: 'btnLE',    release_action : 'none',    feedback:'led', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '18'},
]

const preferences = [
//    {text: 'Enable black/cue/black',      unitId: '9',    key: '36',  action: 'btnLE',    release_action : 'none',    feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text: 'Enable in/past switching',      unitId: '9',    key: '37',  action: 'btnLE',    release_action : 'none',    feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'text next screen',              unitId: '9',    key: '38',  action: 'btnLE',    release_action : 'none',    feedback:'none',    shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnOnColor,   size : '14'},
//    {text: 'next punch',                  unitId: '9',    key: '39',  action: 'btnLE',    release_action : 'none',    feedback:'none',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnOnColor,size : '18'},
    {text: 'Link Comp, PB Routing',         unitId: '9',    key: '40',  action: 'btnLE',    release_action : 'none',    feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Alt Guide in Record',           unitId: '9',    key: '46',  action: 'btnLE',    release_action : 'none',    feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Debug\\nStop,\\nCancel',        unitId: '9',    key: '65',  action: 'btnLE',    release_action : 'none',    feedback:'none',    shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Inh PB Strmr',                  unitId: '9',    key: '45',  action: 'btnLE',    release_action : 'none',    feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '18'},
    {text: 'Dialog\\nin\\nclipname',        unitId: '9',    key: '67',  action: 'btnLE',    release_action : 'none',    feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Notes\\nin\\nclipname',         unitId: '9',    key: '68',  action: 'btnLE',    release_action : 'none',    feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Actor\\nin\\ntrkname',          unitId: '9',    key: '69',  action: 'btnLE',    release_action : 'none',    feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Capture\\n1st line',            unitId: '9',    key: '76',  action: 'btnLE',    release_action : 'none',    feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Hide\\nVideo\\nDelay',          unitId: '9',    key: '77',  action: 'btnLE',    release_action : 'none',    feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,      size : '14'},
    {text: 'Read\\nLog',                    unitId: '9',    key: '78',  action: 'btnLE',    release_action : 'btnTE',   feedback:'none',    shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,   size : '14'},
    {text: 'Show\\nAll\\nCols',             unitId: '9',    key: '79',  action: 'btnLE',    release_action : 'btnTE',   feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Streamer\\nAnnun\\nColor',      unitId: '9',    key: '80',  action: 'btnLE',    release_action : 'btnTE',   feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'CueID\\nIn\\nSlate',            unitId: '9',    key: '82',  action: 'btnLE',    release_action : 'btnTE',   feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Link\\nRemote\\nActor',         unitId: '9',    key: '111', action: 'btnLE',    release_action : 'btnTE',   feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Link\\nRemote\\nEditor',        unitId: '9',    key: '112', action: 'btnLE',    release_action : 'btnTE',   feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Local\\nBoom Rec\\nOnline',     unitId: '9',    key: '113', action: 'btnLE',    release_action : 'btnTE',   feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Remote\\nBoom Rec\\nOnline',    unitId: '9',    key: '114', action: 'btnLE',    release_action : 'btnTE',   feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Sort\\nBy\\nChar',              unitId: '9',    key: '115', action: 'btnLE',    release_action : 'btnTE',   feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Tele-\\nPrompter',              unitId: '9',    key: '116', action: 'btnLE',    release_action : 'btnTE',   feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Fill\\nPlays\\nIn PB',          unitId: '9',    key: '117', action: 'btnLE',    release_action : 'btnTE',   feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Progress\\nBar',                unitId: '9',    key: '122', action: 'btnLE',    release_action : 'btnTE',   feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Progress\\nPer Cue',            unitId: '9',    key: '123', action: 'btnLE',    release_action : 'btnTE',   feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},
    {text: 'Incr Track\\nAfter\\nRecord',   unitId: '9',    key: '125', action: 'btnLE',    release_action : 'btnTE',   feedback:'led',     shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},

]
// shift and unshift buttons with the same key may have different feedbacks

const preroll = [
     {text: 'Preroll 4',    unitId: '8',    key: '1',  action: 'btnLE',    release_action : 'none',    feedback:'preroll',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
     {text: 'Preroll 6',    unitId: '8',    key: '9',  action: 'btnLE',    release_action : 'none',    feedback:'preroll',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
     {text: 'Preroll 8',    unitId: '8',    key: '17',  action: 'btnLE',   release_action : 'none',    feedback:'preroll',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
     {text: 'Preroll 12',   unitId: '8',    key: '25',  action: 'btnLE',   release_action : 'none',    feedback:'preroll',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
     {text: 'Preroll Here', unitId: '8',    key: '33',  action: 'btnLE',   release_action : 'none',    feedback:'preroll',   shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
]

const streamers = [
    {text: 'Streamer 1',        unitId: '8',    key: '41',  action: 'btnLE',    release_action : 'none',    feedback:'led',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Streamer 2',        unitId: '8',    key: '49',  action: 'btnLE',    release_action : 'none',    feedback:'led',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Streamer 3',        unitId: '8',    key: '57',  action: 'btnLE',    release_action : 'none',    feedback:'led',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Streamer 4',        unitId: '8',    key: '42',  action: 'btnLE',    release_action : 'none',    feedback:'led',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Streamer 5',        unitId: '8',    key: '50',  action: 'btnLE',    release_action : 'none',    feedback:'led',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Streamer 6',        unitId: '8',    key: '58',  action: 'btnLE',    release_action : 'none',    feedback:'led',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    
    {text: 'Delete Streamers',      unitId: '8',    key: '59',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
]

const transport = [
    {text: 'Cycle',                 unitId: '9',    key: '66',  action: 'btnLE',    release_action : 'none',   feedback:'btn', shift: false,color: btnWhiteColor, bgColor: cycleBlue,selectedColor: 0, selectedBgColor: aBlueColor,size : '18'},
    {text: 'Play Stop',             unitId: '8',    key: '47', action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
        
    {text: 'Next Cue',              unitId: '8',    key: '78',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Prev Cue',              unitId: '8',    key: '70',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    
    {text: 'Slow Fwd',              unitId: '8',    key: '74',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Fast Fwd',              unitId: '8',    key: '75',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    
    {text: 'Slow Rev',              unitId: '8',    key: '66',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Fast Rev',              unitId: '8',    key: '67',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},

    {text: 'Locate Streamer 1',     unitId: '8',    key: '41',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Locate Streamer 2',     unitId: '8',    key: '49',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Locate Streamer 3',     unitId: '8',    key: '57',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Locate Streamer 4',     unitId: '8',    key: '42',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Locate Streamer 5',     unitId: '8',    key: '50',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Locate Streamer 6',     unitId: '8',    key: '58',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    
]

const monitor = [
    {text: 'Show Mono',             unitId: '8',    key: '64',  action: 'btnLE',    release_action : 'none',   feedback:'monitor',      shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '18'},
    {text: 'Show Stereo',           unitId: '8',    key: '72',  action: 'btnLE',    release_action : 'none',   feedback:'monitor',      shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '18'},
    {text: 'Show LCR',              unitId: '8',    key: '65',  action: 'btnLE',    release_action : 'none',   feedback:'monitor',      shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '18'},
    {text: 'Show 4X',               unitId: '8',    key: '73',  action: 'btnLE',    release_action : 'none',   feedback:'monitor',      shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '18'},
    {text: 'Show 6X',               unitId: '8',    key: '65',  action: 'btnLE',    release_action : 'none',   feedback:'monitor',      shift: true,    color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '18'},
    {text: 'Show 8X',               unitId: '8',    key: '73',  action: 'btnLE',    release_action : 'none',   feedback:'monitor',      shift: true,    color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '18'},
    {text: 'Talkback\\nA',          unitId: '9',    key: '73',  action: 'btnLE',    release_action : 'btnTE',  feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : 'auto'},
    {text: 'Talkback\\nB',          unitId: '9',    key: '74',  action: 'btnLE',    release_action : 'btnTE',  feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : 'auto'},
    {text: 'Talkback\\nC',          unitId: '9',    key: '109', action: 'btnLE',    release_action : 'btnTE',  feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : 'auto'},
    {text: 'Talkback\\nD',          unitId: '9',    key: '110', action: 'btnLE',    release_action : 'btnTE',  feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : 'auto'},
    {text: 'Snoop\\nAuto\\nOn',     unitId: '9',    key: '81',  action: 'btnLE',    release_action : 'none',   feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text: 'Rate\\n48K',            unitId: '9',    key: '83',  action: 'btnLE',    release_action : 'none',   feedback:'sampleRate',   shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '18'},
    {text: 'Rate\\n96K',            unitId: '9',    key: '84',  action: 'btnLE',    release_action : 'none',   feedback:'sampleRate',   shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '18'},
    {text: 'Rate\\n192K',           unitId: '9',    key: '85',  action: 'btnLE',    release_action : 'none',   feedback:'sampleRate',   shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '18'},
    {text: 'Mute\\nAll',            unitId: '9',    key: '86',  action: 'btnLE',    release_action : 'none',   feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: btnWhiteColor, selectedBgColor: aRedColor,size : '18'},
    {text: 'Mute\\nCtl Room',       unitId: '9',    key: '87',  action: 'btnLE',    release_action : 'none',   feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: btnWhiteColor, selectedBgColor: aRedColor,size : '14'},
    {text: 'Mute\\nStage',          unitId: '9',    key: '88',  action: 'btnLE',    release_action : 'none',   feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: btnWhiteColor, selectedBgColor: aRedColor,size : '18'},
    {text: 'Mute\\nActor',          unitId: '9',    key: '89',  action: 'btnLE',    release_action : 'none',   feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: btnWhiteColor, selectedBgColor: aRedColor,size : '18'},
    {text: 'Mute\\nEditor',         unitId: '9',    key: '90',  action: 'btnLE',    release_action : 'none',   feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: btnWhiteColor, selectedBgColor: aRedColor,size : '18'},
    {text: 'Dim\\nCtl Room',        unitId: '9',    key: '91',  action: 'btnLE',    release_action : 'none',   feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: btnWhiteColor, selectedBgColor: AIP_AMBER,size : '14'},
    {text: 'Mute\\nSnoop',          unitId: '9',    key: '108', action: 'btnLE',    release_action : 'none',   feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: btnWhiteColor, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Actor\\nDir\\nMic 1',   unitId: '9',    key: '118', action: 'btnLE',    release_action : 'none',   feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: btnWhiteColor, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Actor\\nDir\\nMic 2',   unitId: '9',    key: '119', action: 'btnLE',    release_action : 'none',   feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: btnWhiteColor, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Actor\\nDir\\nMic 3',   unitId: '9',    key: '120', action: 'btnLE',    release_action : 'none',   feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: btnWhiteColor, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Actor\\nDir\\nMic 4',   unitId: '9',    key: '121', action: 'btnLE',    release_action : 'none',   feedback:'led',          shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: btnWhiteColor, selectedBgColor: AIP_RED,size : '14'},
]

// we edited companion241/lib/preset.js to add rotate_right_action, rotate_left_action
// the '100' offset for dialKey should have been sequential instead, but leave it alone

const gainControls = [
    {text: 'Zoom',                  unitId: '9',    key: '92',    dialKey: '192',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Source\\nConnect',      unitId: '9',    key: '93',    dialKey: '193',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Actor\\nDirect',        unitId: '9',    key: '94',    dialKey: '194',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Actor\\nHP',            unitId: '9',    key: '95',    dialKey: '195',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Beeps',                 unitId: '9',    key: '96',    dialKey: '196',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Mac\\nCPU',             unitId: '9',    key: '97',    dialKey: '197',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Guide\\nTo CtlRm',      unitId: '9',    key: '98',    dialKey: '198',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Snoop',                 unitId: '9',    key: '99',    dialKey: '199',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Loopback',              unitId: '9',    key: '100',   dialKey: '200',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Remote\\nActor Dir',    unitId: '9',    key: '101',   dialKey: '201',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Remote\\nActor HP',     unitId: '9',    key: '102',   dialKey: '202',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Video\\nDelay',         unitId: '9',    key: '103',   dialKey: '203',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Control\\nRoom',        unitId: '9',    key: '104',   dialKey: '204',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Stage',                 unitId: '9',    key: '105',   dialKey: '205',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
    {text: 'Editor\\nHP',           unitId: '9',    key: '106',   dialKey: '206',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},
//    {text: 'Remote\\nEditor HP',    unitId: '9',    key: '107',   dialKey: '207',  action: 'btnLE', release_action : 'btnTE', rotate_right_action : 'dialRight', rotate_left_action : 'dialLeft',  feedback:'btn',    shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: AIP_RED,size : '14'},  // 1/3/24
]

const xKeyUnit8 = [
    {text: 'Cue Name',                      unitId: '8',    key: '0',  action: 'btnLE',    release_action : 'none',    feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'ESC',                           unitId: '8',    key: '4',  action: 'btnLE',    release_action : 'none',    feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Store Out Point',               unitId: '8',    key: '6',  action: 'btnLE',    release_action : 'none',    feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    
    {text: 'Cue Note',                      unitId: '8',    key: '8',  action: 'btnLE',    release_action : 'none',    feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
     
    {text: 'Edit Dialog',                   unitId: '8',    key: '16',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},

    {text: 'Inpoint\\n-1 Fr',               unitId: '8',    key: '19',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    
    {text: 'Input Bussing',                 unitId: '8',    key: '24',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Inpoint\\n+1 Fr',               unitId: '8',    key: '27',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    
    {text: 'PB Routing',                    unitId: '8',    key: '32',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: '+ Frames',                      unitId: '8',    key: '35',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Locate to Inpoint',             unitId: '8',    key: '39',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
            
    {text: 'Guide Routing',                 unitId: '8',    key: '40',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'RRPb Off',                      unitId: '9',    key: '64',  action: 'btnLE',    release_action : 'none',   feedback:'rehRecPb',  shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aYellowColor,size : '18'},
    {text: 'Rehearse',                      unitId: '8',    key: '43',  action: 'btnLE',    release_action : 'none',   feedback:'rehRecPb',  shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text: 'Record',                        unitId: '8',    key: '44',  action: 'btnLE',    release_action : 'none',   feedback:'rehRecPb',  shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aRedColor,size : '14'},
    {text: 'Playback',                      unitId: '8',    key: '45',  action: 'btnLE',    release_action : 'none',   feedback:'rehRecPb',  shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aBlueColor,size : '14'},
        
    {text: 'Verb & Futz',                   unitId: '8',    key: '48',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
        
    {text: 'Main Outputs',                  unitId: '8',    key: '56',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Set Pre-Edit',                  unitId: '8',    key: '60',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Wild Sync Select',              unitId: '8',    key: '61',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Show 16 Tracks',                unitId: '8',    key: '62',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnOnColor,size : '18'},  // TODO: why 2 buttons? Ask Evan
    {text: 'Toggle Show 16',                unitId: '9',    key: '34',  action: 'btnLE',    release_action : 'btnTE',  feedback:'led',  shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,  size : '14'},  // 11/19/25 btnTE was missing, toggleShowSixteen: needs it
    {text: 'show Armed',                    unitId: '8',    key: '63',  action: 'btnLE',    release_action : 'btnTE',  feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnOnColor,size : '18'},

    {text: 'Sample',                        unitId: '8',    key: '68',  action: 'btnLE',    release_action : 'btnTE',  feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Quick Preview',                 unitId: '8',    key: '69',  action: 'btnLE',    release_action : 'btnTE',  feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    
    {text: 'Delete Current Cue',            unitId: '8',    key: '1',  action: 'btnLE',     release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Anchor',                        unitId: '8',    key: '5',  action: 'btnLE',     release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    
    {text: 'Toggle Opaque',                 unitId: '9',    key: '41',  action: 'btnLE',    release_action : 'none',   feedback:'led',  shift: false, color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,    size : '18'},
    {text: 'Enable Strmr',                  unitId: '9',    key: '42',  action: 'btnLE',    release_action : 'none',   feedback:'led',  shift: false, color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,    size : '18'},
    {text: 'Enable Punch',                  unitId: '9',    key: '43',  action: 'btnLE',    release_action : 'none',   feedback:'led',  shift: false, color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,    size : '18'},
    {text: 'Enable Beeps',                  unitId: '9',    key: '44',  action: 'btnLE',    release_action : 'none',   feedback:'led',  shift: false, color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,    size : '18'},
//    {text: 'Show 16',                     unitId: '9',    key: '47',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,   color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '18'},

    {text: 'Window Toggle',                 unitId: '8',    key: '6',  action: 'btnLE',     release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
            
//    {text: 'Inhibit Streamer Toggle',     unitId: '8',    key: '11',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    
    // we want this to be two lines, \n does not work, though https://github.com/bitfocus/companion/wiki/Text-input says it will
    // answer: \n does work when you manually build a button, but not in presets
    // from Julian Waller at Slack: use \\n (which does work)
    {text: 'Beeps\\n-1',                    unitId: '8',    key: '17',  action: 'btnLE',    release_action : 'none',   feedback:'beepsTrim', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnOnColor,size : '18'},
    {text: 'Inpoint\\n-10 Fr',              unitId: '8',    key: '19',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
        
    {text: 'Beeps\\n+1',                    unitId: '8',    key: '25',  action: 'btnLE',    release_action : 'none',   feedback:'beepsTrim', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnOnColor,size : '18'},
    {text: 'Inpoint\\n+10 Fr',              unitId: '8',    key: '27',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Zero Feet',                     unitId: '8',    key: '31',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    
    {text: 'Add Cue',                       unitId: '8',    key: '39',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Ahead',                         unitId: '8',    key: '43',  action: 'btnLE',    release_action : 'none',   feedback:'aheadInPast', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aYellowColor,size : '18'},
    {text: 'In',                            unitId: '8',    key: '44',  action: 'btnLE',    release_action : 'none',   feedback:'aheadInPast', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '18'},
    {text: 'Past',                          unitId: '8',    key: '45',  action: 'btnLE',    release_action : 'none',   feedback:'aheadInPast', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aBlueColor,size : '18'},
    {text: 'Stop,\\nSkip Cut\\nAnd Paste',  unitId: '8',    key: '47',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    
    {text: 'Cleanup Mono',                  unitId: '8',    key: '64',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Capture Sample',                unitId: '8',    key: '68',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Capture Fill',                  unitId: '8',    key: '69',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Unmerge Dialog',                unitId: '8',    key: '70',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    
    {text: 'Cleanup Stereo',                unitId: '8',    key: '72',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Output Routing',                unitId: '8',    key: '74',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Merge Dialog',                  unitId: '8',    key: '78',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: true,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Trigger Streamr',               unitId: '9',    key: '62',  action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '18'},
    {text: 'Capture\\nFoley\\nClip',        unitId: '9',    key: '124', action: 'btnLE',    release_action : 'none',   feedback:'none', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '14'},

]

const xKeyUnit3 = [
//    {text: 'Loop 1',                unitId: '9',    key: '48',    action: 'btnLE',    release_action : 'none',   feedback:'btn', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '18'},
//    {text: 'Loop 2',                unitId: '9',    key: '49',    action: 'btnLE',    release_action : 'none',   feedback:'btn', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '18'},
//    {text: 'Loop 3',                unitId: '9',    key: '50',    action: 'btnLE',    release_action : 'none',   feedback:'btn', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '18'},
//    {text: 'Loop 4',                unitId: '9',    key: '51',    action: 'btnLE',    release_action : 'none',   feedback:'btn', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '18'},
//    {text: 'Loop 5',                unitId: '9',    key: '52',    action: 'btnLE',    release_action : 'none',   feedback:'btn', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '18'},
//    {text: 'Loop 6',                unitId: '9',    key: '53',    action: 'btnLE',    release_action : 'none',   feedback:'btn', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '18'},
//    {text: 'Loop 7',                unitId: '9',    key: '54',    action: 'btnLE',    release_action : 'none',   feedback:'btn', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '18'},
//    {text: 'Loop 8',                unitId: '9',    key: '55',    action: 'btnLE',    release_action : 'none',   feedback:'btn', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '18'},
//    {text: 'Loop 9',                unitId: '9',    key: '56',    action: 'btnLE',    release_action : 'none',   feedback:'btn', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '18'},
//    {text: 'Loop 10',               unitId: '9',    key: '57',    action: 'btnLE',    release_action : 'none',   feedback:'btn', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '18'},
//    {text: 'Loop 11',               unitId: '9',    key: '58',    action: 'btnLE',    release_action : 'none',   feedback:'btn', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '18'},
//    {text: 'Loop 12',               unitId: '9',    key: '59',    action: 'btnLE',    release_action : 'none',   feedback:'btn', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '18'},
    {text: 'Sampler Standard Fill', unitId: '9',    key: '60',    action: 'btnLE',    release_action : 'none',   feedback:'led', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '14'},
    {text: 'Sampler Custom Fill',   unitId: '9',    key: '61',    action: 'btnLE',    release_action : 'none',   feedback:'led', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '14'},
//    {text: 'Test Button',           unitId: '9',    key: '63',    action: 'btnLE',    release_action : 'none',   feedback:'btn', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: powderBlue,size : '18'},
]

const launchPadMini = [
    //{text: 'Toggle Auto Play', unitId: '10',    key: 'b0687f',     action: 'btnLE',    release_action : 'none',   feedback:'led', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'lpMini actor editor', unitId: '10',    key: 'b0697f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'lpMini stage CtlRm',  unitId: '10',    key: 'b06a7f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'lpMini SrcConn',         unitId: '10',    key: 'b06b7f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},

    // TODO: why were there 2 sets of 'show' buttons?
    {text: 'lpMini r.actor r.editor', unitId: '10',    key: 'b06d7f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},

    {text: 'mic 1-1',               unitId: '10',   key: '90087f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'mic 2-1',               unitId: '10',   key: '90187f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'mic 3-1',               unitId: '10',   key: '90287f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'mic 4-1',               unitId: '10',   key: '90387f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'mic 5-1',               unitId: '10',   key: '90487f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'PB Futz',               unitId: '10',   key: '90587f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Cp Futz',               unitId: '10',   key: '90687f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},
    {text: 'Fill',                  unitId: '10',   key: '90787f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '18'},

    {text: 'mic 1 Direct Left',     unitId: '10',   key: '90507f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'mic 2 Direct Left',     unitId: '10',   key: '90517f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'mic 3 Direct Left',     unitId: '10',   key: '90527f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'mic 4 Direct Left',     unitId: '10',   key: '90537f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Bus 1 Playback Left',   unitId: '10',   key: '90547f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Bus 2 Playback Left',   unitId: '10',   key: '90557f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Bus 3 Playback Left',   unitId: '10',   key: '90567f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Bus 4 Playback Left',   unitId: '10',   key: '90577f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},

    {text: 'mic 1 Direct Center',   unitId: '10',   key: '90607f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'mic 2 Direct Center',   unitId: '10',   key: '90617f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'mic 3 Direct Center',   unitId: '10',   key: '90627f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'mic 4 Direct Center',   unitId: '10',   key: '90637f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Bus 1 Playback Center', unitId: '10',   key: '90647f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Bus 2 Playback Center', unitId: '10',   key: '90657f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Bus 3 Playback Center', unitId: '10',   key: '90667f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Bus 4 Playback Center', unitId: '10',   key: '90677f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},

    {text: 'mic 1 Direct Right',    unitId: '10',   key: '90707f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'mic 2 Direct Right',    unitId: '10',   key: '90717f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'mic 3 Direct Right',    unitId: '10',   key: '90727f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'mic 4 Direct Right',    unitId: '10',   key: '90737f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Bus 1 Playback Right',  unitId: '10',   key: '90747f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Bus 2 Playback Right',  unitId: '10',   key: '90757f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Bus 3 Playback Right',  unitId: '10',   key: '90767f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    {text: 'Bus 4 Playback Right',  unitId: '10',   key: '90777f',     action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: btnWhiteColor,size : '14'},
    
    // keys for Evan's new logic, 'and left to right on each row it's Actor A, Actor I, Editor A, Editor I, Stage A, Stage I, Cntl Rm A, Cntl Rm I'
    // Actor beeps                      0x91007f
    // actor direct     ahead,in,past   0x91007f+3,0x91007f+4,0x91007f+5
    // actor Playback   ahead,in,past   0x91007f+6,0x91007f+7,0x91007f+8
    // actor Comp       ahead,in,past   0x91007f+9,0x91007f+10,0x91007f+11
    // actor Guide      ahead,in,past   0x91007f+12,0x91007f+13,0x91007f+14
    // Editor beeps 0x91007f+16
    // Stage beeps 0x91007f+32
    // Booth beeps 0x91007f+64
    // SrcConn beeps 0x91007f+96

//    {text:'Actor Beeps In',    unitId: '10',    key:'91017f',action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: btnWhiteColor, selectedBgColor: aBlueColor,size : '14'},
//    {text:'Actor Beeps Past',    unitId: '10',    key:'91027f',action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: btnWhiteColor, selectedBgColor: aBlueColor,size : '14'},
    
    // key is matrixIndex_buttonTag (easy to set Matrix buttons)
    {text:'A\\nCtlRm Guide',          unitId: '10',    key:'0_0'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nCtlRm Guide',          unitId: '10',    key:'0_1'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nCtlRm Guide',          unitId: '10',    key:'0_2'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nCtlRm Direct',         unitId: '10',    key:'0_3'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nCtlRm Direct',         unitId: '10',    key:'0_4'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nCtlRm Direct',         unitId: '10',    key:'0_5'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nCtlRm Playback',       unitId: '10',    key:'0_6'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nCtlRm Playback',       unitId: '10',    key:'0_7'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nCtlRm Playback',       unitId: '10',    key:'0_8'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nCtlRm Comp',           unitId: '10',    key:'0_9'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nCtlRm Comp',           unitId: '10',    key:'0_10' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nCtlRm Comp',           unitId: '10',    key:'0_11' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nCtlRm Beeps',          unitId: '10',    key:'0_12' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nCtlRm Beeps',          unitId: '10',    key:'0_13' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nCtlRm Beeps',          unitId: '10',    key:'0_14' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},

    {text:'A\\nStage Guide',          unitId: '10',    key:'1_0'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nStage Guide',          unitId: '10',    key:'1_1'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nStage Guide',          unitId: '10',    key:'1_2'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nStage Direct',         unitId: '10',    key:'1_3'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nStage Direct',         unitId: '10',    key:'1_4'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nStage Direct',         unitId: '10',    key:'1_5'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nStage Playback',       unitId: '10',    key:'1_6'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nStage Playback',       unitId: '10',    key:'1_7'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nStage Playback',       unitId: '10',    key:'1_8'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nStage Comp',           unitId: '10',    key:'1_9'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nStage Comp',           unitId: '10',    key:'1_10' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nStage Comp',           unitId: '10',    key:'1_11' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nStage Beeps',          unitId: '10',    key:'1_12' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nStage Beeps',          unitId: '10',    key:'1_13' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nStage Beeps',          unitId: '10',    key:'1_14' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},

    {text:'A\\nActor Guide',          unitId: '10',    key:'2_0'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nActor Guide',          unitId: '10',    key:'2_1'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nActor Guide',          unitId: '10',    key:'2_2'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nActor Direct',         unitId: '10',    key:'2_3'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nActor Direct',         unitId: '10',    key:'2_4'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nActor Direct',         unitId: '10',    key:'2_5'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nActor Playback',       unitId: '10',    key:'2_6'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nActor Playback',       unitId: '10',    key:'2_7'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nActor Playback',       unitId: '10',    key:'2_8'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nActor Comp',           unitId: '10',    key:'2_9'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nActor Comp',           unitId: '10',    key:'2_10' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nActor Comp',           unitId: '10',    key:'2_11' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nActor Beeps',          unitId: '10',    key:'2_12' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nActor Beeps',          unitId: '10',    key:'2_13' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nActor Beeps',          unitId: '10',    key:'2_14' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},

    {text:'A\\nEditor Guide',         unitId: '10',    key:'3_0'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nEditor Guide',         unitId: '10',    key:'3_1'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nEditor Guide',         unitId: '10',    key:'3_2'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nEditor Direct',        unitId: '10',    key:'3_3'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nEditor Direct',        unitId: '10',    key:'3_4'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nEditor Direct',        unitId: '10',    key:'3_5'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nEditor Playback',      unitId: '10',    key:'3_6'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nEditor Playback',      unitId: '10',    key:'3_7'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nEditor Playback',      unitId: '10',    key:'3_8'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nEditor Comp',          unitId: '10',    key:'3_9'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nEditor Comp',          unitId: '10',    key:'3_10' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nEditor Comp',          unitId: '10',    key:'3_11' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nEditor Beeps',         unitId: '10',    key:'3_12' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nEditor Beeps',         unitId: '10',    key:'3_13' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nEditor Beeps',         unitId: '10',    key:'3_14' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},

    {text:'A\\nSrcConn Guide',        unitId: '10',    key:'4_0'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nSrcConn Guide',        unitId: '10',    key:'4_1'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nSrcConn Guide',        unitId: '10',    key:'4_2'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nSrcConn Direct',       unitId: '10',    key:'4_3'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nSrcConn Direct',       unitId: '10',    key:'4_4'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nSrcConn Direct',       unitId: '10',    key:'4_5'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nSrcConn Playback',     unitId: '10',    key:'4_6'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nSrcConn Playback',     unitId: '10',    key:'4_7'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nSrcConn Playback',     unitId: '10',    key:'4_8'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nSrcConn Comp',         unitId: '10',    key:'4_9'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nSrcConn Comp',         unitId: '10',    key:'4_10' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nSrcConn Comp',         unitId: '10',    key:'4_11' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nSrcConn Beeps',        unitId: '10',    key:'4_12' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nSrcConn Beeps',        unitId: '10',    key:'4_13' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nSrcConn Beeps',        unitId: '10',    key:'4_14' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},

    {text:'A\\nR.Actor Guide',        unitId: '10',    key:'5_0'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nR.Actor Guide',        unitId: '10',    key:'5_1'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nR.Actor Guide',        unitId: '10',    key:'5_2'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nR.Actor Direct',       unitId: '10',    key:'5_3'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nR.Actor Direct',       unitId: '10',    key:'5_4'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nR.Actor Direct',       unitId: '10',    key:'5_5'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nR.Actor Playback',     unitId: '10',    key:'5_6'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nR.Actor Playback',     unitId: '10',    key:'5_7'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nR.Actor Playback',     unitId: '10',    key:'5_8'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nR.Actor Comp',         unitId: '10',    key:'5_9'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nR.Actor Comp',         unitId: '10',    key:'5_10' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nR.Actor Comp',         unitId: '10',    key:'5_11' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nR.Actor Beeps',        unitId: '10',    key:'5_12' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nR.Actor Beeps',        unitId: '10',    key:'5_13' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nR.Actor Beeps',        unitId: '10',    key:'5_14' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},

    {text:'A\\nR.Editor Guide',       unitId: '10',    key:'6_0'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nR.Editor Guide',       unitId: '10',    key:'6_1'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nR.Editor Guide',       unitId: '10',    key:'6_2'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nR.Editor Direct',      unitId: '10',    key:'6_3'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nR.Editor Direct',      unitId: '10',    key:'6_4'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nR.Editor Direct',      unitId: '10',    key:'6_5'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nR.Editor Playback',    unitId: '10',    key:'6_6'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nR.Editor Playback',    unitId: '10',    key:'6_7'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nR.Editor Playback',    unitId: '10',    key:'6_8'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nR.Editor Comp',        unitId: '10',    key:'6_9'  ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nR.Editor Comp',        unitId: '10',    key:'6_10' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nR.Editor Comp',        unitId: '10',    key:'6_11' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'A\\nR.Editor Beeps',       unitId: '10',    key:'6_12' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'I\\nR.Editor Beeps',       unitId: '10',    key:'6_13' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},
    {text:'P\\nR.Editor Beeps',       unitId: '10',    key:'6_14' ,action: 'btnLE',    release_action : 'none',   feedback:'lpMini', shift: false,color: btnWhiteColor, bgColor: btnOffColor,selectedColor: 0, selectedBgColor: aGreenColor,size : '14'},

]

const categories = [
    {buttonArray: trackSelection,   category: 'Track selection',},
    {buttonArray: numberPad,        category: 'Number pad',},
    {buttonArray: status,           category: 'Status',}, // show status on the buttons themselves
    {buttonArray: picture,           category: 'Picture mode',}, // always on, fade in, blk/cue/blk
    {buttonArray: preroll,          category: 'Preroll',},
    {buttonArray: streamers,        category: 'Streamers',},
    {buttonArray: monitor,          category: 'Monitor',},
    {buttonArray: transport,        category: 'Transport',},
    {buttonArray: xKeyUnit8,        category: 'ADR controller',},
    {buttonArray: xKeyUnit3,        category: 'Loops',},  // TODO: does Evan use the loop window?
    {buttonArray: preferences,      category: 'Preferences',},
    {buttonArray: launchPadMini,    category: 'launch Pad Mini',},
    {dialArray : gainControls,      category: 'Dials',},
]

export function getPresetDefinitions(self){
    const presets = {}
    
    for (const categoryItem of categories){
        
        if(typeof(categoryItem.dialArray) != 'undefined'){
            //            console.log('categoryItem.dialArray',categoryItem.dialArray)
            
            for (const dialItem of categoryItem.dialArray){
                //console.log('dialItem.rotate_right_action',dialItem.rotate_right_action,'dialItem.rotate_left_action',dialItem.rotate_left_action)
                presets[dialItem.text] = {
                    
                    type: 'button',
                    category: categoryItem.category,    // The category of this preset, for grouping
                    name: dialItem.text,
                    options: {
                        rotaryActions: true,
                    },
                    style: {
                        text: dialItem.text,//`$(aledoc:armedTrack)`,//dialItem.text,//`${dialItem.txt1}`,//
                        size: dialItem.size,
                        color: dialItem.color,
                        bgcolor: dialItem.bgColor,    // on dark gray
                    },
                    steps: [
                            {
                                down: [
                                    {
                                        actionId: dialItem.action,
                                        options: {
                                            value: `${dialItem.unitId},${dialItem.key},${dialItem.shift}`,   // backticks, not single quotes, for ${}
                                            text: dialItem.text,
                                        }
                                    }
                                ],
                                up: [
                                    {
                                        actionId: dialItem.release_action,
                                        options: {
                                            value: `${dialItem.unitId},-${dialItem.key == '0' ? '128' : dialItem.key},${dialItem.shift}`,   // XKEY:  '-0' is '-128'
                                            text: dialItem.text,
                                        }
                                    }
                                ],
                                rotate_left: [
                                    {
                                        actionId: dialItem.rotate_left_action,
                                        options: {
                                            value: `${dialItem.unitId},-${dialItem.dialKey},${dialItem.shift}`,   // backticks, not single quotes, for ${}, change to include rotary action
                                            text: dialItem.text,
                                        }
                                    }
                                ],
                                rotate_right: [
                                    {
                                        actionId: dialItem.rotate_right_action,
                                        options: {
                                            value: `${dialItem.unitId},${dialItem.dialKey},${dialItem.shift}`,   // backticks, not single quotes, for ${}, change to include rotary action
                                            text: dialItem.text,
                                        }
                                    }
                                ],
                            },
                    ],
                    // https://github.com/bitfocus/companion/wiki/Migrating-legacy-to-boolean-feedbacks
                    /*
                     In Bitfocus Companion 4, the $(instancename:variablename) syntax, often referred to as the $() function or variable system, is used to access and display the value of a variable within a module's instance.
                     */
                    
                    feedbacks: [
                        {
                            feedbackId: dialItem.feedback,   //refers to an item set in init_feedbacks()
                            // The style property is only valid for 'boolean' feedbacks, and defines the style change it will have.
                            style: {
                                // The default style change for a boolean feedback
                                // The user will be able to customise these values as well as the fields that will be changed
                                color: dialItem.selectedColor,   //black text
                                bgcolor: dialItem.selectedBgColor,
                                // 4.1.3 changing these does change the button size, text on the Buttons/Presets page, not on the buttons
                                //size: '14',  // must be one of legalTextSizes[]
                                //text: `$(aledoc:armedTrack)`//dialItem.text,
                            },
                            options:{
                                unitId:             dialItem.unitId,
                                key :               dialItem.key,
                                text:               dialItem.text,
                                shift:              dialItem.shift,
                                selectedColor:      dialItem.selectedColor,
                                selectedBgColor:    dialItem.selectedBgColor,
                                //fn:                 dialItem.fn,  // shift-display function for XKEY, usually nil
                                //                            txt1: `${dialItem.txt1}`, // not used, but left as a reminder of how to do things
                                //                            txt2: `${dialItem.txt2}`,
                                //                            txt3: `${dialItem.txt3}`, // evaluates to 'undefined', as text, if txt3 not present
                            },
                            
                        }
                    ],
                }
            }
        }
        
        if(typeof(categoryItem.buttonArray) != 'undefined'){
            for (const buttonItem of categoryItem.buttonArray){
                
                presets[buttonItem.text] = {
                    
                    type: 'button',
                    category: categoryItem.category,    // The category of this preset, for grouping
                    name: buttonItem.text,
                    style: {
                        text: buttonItem.text,//`$(aledoc:armedTrack)`,//buttonItem.text,//`${buttonItem.txt1}`,//
                        size: buttonItem.size,
                        color: buttonItem.color,
                        bgcolor: buttonItem.bgColor,    // on dark gray
                    },
                    steps: [
                        {
                            down: [
                                   {
                                     actionId: buttonItem.action,
                                     options: {
                                         value: `${buttonItem.unitId},${buttonItem.key},${buttonItem.shift}`,   // backticks, not single quotes, for ${}
                                         text: buttonItem.text,
                                     }
                                   }
                            ],
                            up: [
                                {
                                     actionId: buttonItem.release_action,
                                     options: {
                                         value: `${buttonItem.unitId},-${buttonItem.key == '0' ? '128' : buttonItem.key},${buttonItem.shift}`,   // XKEY:  '-0' is '-128'
                                         text: buttonItem.text,
                                     }
                                }
                            ],
                        }
                    ],
                    // https://github.com/bitfocus/companion/wiki/Migrating-legacy-to-boolean-feedbacks
                    /*
                     In Bitfocus Companion 4, the $(instancename:variablename) syntax, often referred to as the $() function or variable system, is used to access and display the value of a variable within a module's instance.
                     */
                    
                    feedbacks: [
                        {
                            feedbackId: buttonItem.feedback,   //refers to an item set in init_feedbacks()
                            // The style property is only valid for 'boolean' feedbacks, and defines the style change it will have.
                            style: {
                                // The default style change for a boolean feedback
                                // The user will be able to customise these values as well as the fields that will be changed
                                color: buttonItem.selectedColor,   //black text
                                bgcolor: buttonItem.selectedBgColor,
                                // 4.1.3 changing these does change the button size, text on the Buttons/Presets page, not on the buttons
                                //size: '14',  // must be one of legalTextSizes[]
                                //text: `$(aledoc:armedTrack)`//buttonItem.text,
                            },
                            options:{
                                unitId:             buttonItem.unitId,
                                key :               buttonItem.key,
                                text:               buttonItem.text,
                                shift:              buttonItem.shift,
                                selectedColor:      buttonItem.selectedColor,
                                selectedBgColor:    buttonItem.selectedBgColor,
                                //fn:                 buttonItem.fn,  // shift-display function for XKEY, usually nil
                                //                            txt1: `${buttonItem.txt1}`, // not used, but left as a reminder of how to do things
                                //                            txt2: `${buttonItem.txt2}`,
                                //                            txt3: `${buttonItem.txt3}`, // evaluates to 'undefined', as text, if txt3 not present
                            },
                            
                        }
                    ],
                }
                
            }
        }
    }

    //console.log('presets',presets)
    return presets
}

        

