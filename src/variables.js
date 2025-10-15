export var globalVars = {
    feedbacks : {},         // used by midiRx feedback
    filterItems : {},       // used by midiRx feedback
    midiRxPort : '0',
    midiRx : '',
    currentTrack : '1',
    monitor: '0',   // mono, stereo etc
    sampleRate : '0',   // 0,1,2 48K, 96K, 192K
    rehRecPb : '0',     // rehearse record playback not_used reh_pending rec_pending pb_pending
    aheadInPast: '0',   // ahead in past
    prerollIndex: '0',
    beepsTrim: '0',
    playStop : '0',
    leds : {
        // 2.00.00 missing entries are added
    },
    // multiple colors on launchPadMini
    lpMini : {},
    // buttons with programmable foreground color, background color, and text
    // missing dictionary items default to the preset
    btn : {},
//    shift: false,
}

export function getVariableDefinitions(self) {

var variables = [
    {
        name: 'armed track',
        variableId: 'armedTrack'
    },
    {
        name: 'rehearse/record/playback',
        variableId: 'rehRecPb'
    },
    {
        name: 'ahead/in/past',
        variableId: 'aheadInPast'
    },
    {
        name: 'stop/play',
        variableId: 'playStop'
    },
]
    
return variables;
}

