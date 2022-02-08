import React, {useState, useRef} from "react"

import ChordOption from "./ChordOption.js"
import ExtensionOption from "./ExtensionOption.js"
import InversionOption from "./InversionOption.js"
import { chordData, inversionData } from "../musicTheory/chordData"
import {intervals, majorTriad, minorTriad, dimTriad, majorSeventh, minorSeventh, majorAdd9, minorAdd9, rootLookup, flavorLookup, chordBuilder} from "../musicTheory/chordGenerator"


const ChordForm = props =>{
    const [menuState, setMenuState] = useState({
        first: {
            degree: "1",
            root: "60",
            flavor: "major",
            extensions: "none",
            inversion: "root",       }
    })

    

    // const chords = ["I", "ii", "iii", "IV", "V", "vi", "vii"]
    // const extensions = ["none", "add 7", "add 9"]
    // const inversionsOne = ["root", "first", "second"]
    // const inversionsTwo = ["root", "first", "second", "third"]

   
    let inversionOptions = ""
    const extensionOptions = props.chordData.find(
        (chord) => chord.name === menuState.first.degree)
        ?.extensions.map((extension) => (
            <option key={extension} value={extension}>
                {extension}
            </option>
        ))

// const states = countriesData
// .find((item) => item.name === country)
// ?.states.map((state) => (
//   <option key={state} value={state}>
//     {state}
//   </option>
// ));
 const generateExtensions = (extensionArray) =>{
    const extensionOptions = extensionArray.map((extension, index)=>{
        return(
            <ExtensionOption
            key={index}
            extension={extension}
            />
        )
    })
    return extensionOptions
}

const generateInversions = (inversionArray) =>{
    const inversionOptions = inversionArray.map((inversion, index)=>{
        return(
            <InversionOption
            key={index}
            inversion={inversion}
            />
        )
    })
    return inversionOptions
}



    //user selects extensions to conditionally render inversion choices
    //if no extensions, inversions = root, first, second
    //if extensions, inversions = root, first, second, third


const handleDegreeChange = (event) =>{
    const first = {...menuState.first, degree: event.currentTarget.value}
    setMenuState({...menuState,
                first})
}


    const handleSubmit = (event) =>{
        event.preventDefault()
        const chord = menuState.first
        props.handleForm(chord)
    }


  
    const chordOptions = chords.map((chord, index) => {
        const degree = index+1
        return(
            <ChordOption
            key={index}
            chord={chord}
            degree={degree}
            />
        )
    })

    //const extensions = ["none", "Add 7", "Add 9 "]
 

   



    
    return(
    <div className="callout">
        <h3>Create Your own chord</h3>
        <form onSubmit={handleSubmit}>
        <select name="first" onChange={handleDegreeChange}>
                
       {chordOptions}
       </select>
       <select>
       {extensionOptions}
       </select>
       <br/>
       <button>Submit</button>
        </form>
        
    </div>
    )
}


export default ChordForm