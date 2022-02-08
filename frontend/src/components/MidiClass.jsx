import React, { Component } from 'react';

import MIDISounds from 'midi-sounds-react';
import ChordForm from './ChordForm';

class MIDIClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstChord: [60, 64],
            secondChord: [62, 65],
            thirdChord: [64, 67],
            fourthChord: [65, 69],
            fifthChord: [67, 71],
            sixthChord: [69, 72],
            seventhChord: [71, 67],
            eighthChord: [72, 67, 60]

        }
    }
  playTestInstrument() {
		this.midiSounds.playChordNow(3, [60], 2.5);
	}

    playMelody(){
        let when = this.midiSounds.contextTime()
        let b = 0.1
        this.midiSounds.playChordAt((when+b*0), 3, this.state.firstChord, 1)
        this.midiSounds.playChordAt((when+b*3), 3, this.state.secondChord, 1)
        this.midiSounds.playChordAt((when+b*6), 3, this.state.thirdChord, 1)
        this.midiSounds.playChordAt((when+b*9), 3, this.state.fourthChord, 1)
        this.midiSounds.playChordAt((when+b*12), 3, this.state.fifthChord, 1)
        this.midiSounds.playChordAt((when+b*15), 3, this.state.sixthChord, 1)
        this.midiSounds.playChordAt((when+b*18), 3, this.state.seventhChord, 1)
        this.midiSounds.playChordAt((when+b*21), 3, this.state.eighthChord, 1)
    }


 
  render() {
    return (
      <div className="App">
    
        <p className="App-intro">Press Play to play instrument sound.</p>					
		<p><button onClick={this.playMelody.bind(this)}>Play</button></p>
      
		<p>Component</p>
    <ChordForm playTestInstrument={this.playTestInstrument}/>
		<MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="app" instruments={[3]} />	
		<hr/>
		<p>Sources: <a href={'https://www.npmjs.com/package/midi-sounds-react'}>https://www.npmjs.com/package/midi-sounds-react</a></p>
      </div>
    );
  }
}

export default MIDIClass;