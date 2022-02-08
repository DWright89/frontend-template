import React, { useState, useRef } from "react";
import MIDISounds from "midi-sounds-react";
import ChordForm from "./ChordForm.js";
import {intervals, majorTriad, minorTriad, dimTriad, majorSeventh, minorSeventh, majorAdd9, minorAdd9, rootLookup, flavorLookup, chordBuilder} from "../musicTheory/chordGenerator"
import { chordData, inversionData } from "../musicTheory/chordData"

const Midi = (props) => {
  const [chordTones, setChordTones] = useState([60]);

  console.log("Intervals in midi, ", intervals)
  console.log("chordData in midi, ", chordData)

  const [scale, setScale] = useState({
    tonic: [60, 64],
    supertonic: [62, 65],
    mediant: [64, 67],
    subdominant: [65, 69],
    dominant: [67, 71],
    superdominant: [69, 60],
    leadingTone: [71, 62],
    octave: [72, 60],
  });

  const [radioSelect, setRadioSelect] = useState("")
  const [selectedChord, setSelectedChord] = useState(0)

  const ref = useRef(null);

  const bpm = 120;
  const N = (4 * 60) / bpm;

  const playMelody = () => {
    let when = ref.current.contextTime();
    let b = 0.1;
    ref.current.playChordAt(when + b * 0, 4, scale.tonic, 1);
    ref.current.playChordAt(when + b * 3, 4, scale.supertonic, 1)
    ref.current.playChordAt(when + b * 6, 4, scale.mediant, 1)
    ref.current.playChordAt(when + b * 9, 4, scale.subdominant, 1)
    ref.current.playChordAt(when + b * 12, 4, scale.dominant, 1)
    ref.current.playChordAt(when + b * 15, 4, scale.superdominant, 1)
    ref.current.playChordAt(when + b * 18, 4, scale.leadingTone, 1)
    ref.current.playChordAt(when + b * 21, 4, scale.octave, 1);
  };


  const playTestInstrument = () => {
    ref.current.playChordNow(4, chordTones, 1.5);
  };

  // const handleIncrement = () =>{
  //   console.log('i clicked the thing')
  //   setChordTones([chordTones[0]+1])
  // }

  const currentChord = () =>{
    console.log(selectedChord)
    const root = rootLookup(selectedChord)
    const flavor = flavorLookup(selectedChord)
    let triad = ""
    if(flavor === 'major'){
      triad = majorTriad.root
    } else if (flavor ==='minor'){
      triad = minorTriad.root
    } else {
      triad = dimTriad.root
    }
    const notes = chordBuilder(root, triad)
    setChordTones(notes)
    ref.current.playChordNow(3, notes, 1.5)
  }


const handleForm = (formData) =>{
setSelectedChord(formData)
}

//look into react dropdown

  return (
    <div className="App">
      <p className="App-intro">Press Play to play instrument sound.</p>
     

      <ChordForm 
      chordData={chordData}
      inversionData={inversionData}
      handleForm={handleForm}/>
      <button onClick={playMelody}>melody</button>
      <button onClick={playTestInstrument}>Playtest</button>


      <button onClick={currentChord}>Current Chord</button>

      
      <MIDISounds ref={ref} appElementName="app" instruments={[3, 4]} />
    </div>
  );
};

export default Midi;
