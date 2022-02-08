const intervals = {
    minorSecond: 1,
    majorSecond: 2,
    minorThird: 3,
    majorThird: 4,
    perfectFourth: 5,
    flatFifth: 6,
    perfectFifth: 7,
    minorSixth: 8,
    majorSixth: 9,
    minorSeventh: 10,
    majorSeventh: 11,
    octave: 12,
    minorNinth: 13,
    majorNinth: 14
}

const majorTriad = {
    root: [intervals.majorThird, intervals.perfectFifth],
    first: [intervals.minorThird, intervals.minorSixth],
    second: [intervals.perfectFourth, intervals.majorSixth]
}

const minorTriad = {
    root: [intervals.minorThird, intervals.perfectFifth],
    first: [intervals.majorThird, intervals.majorSixth],
    second: [intervals.perfectFourth, intervals.minorSixth]
}

const majorSeventh = {
    root: [intervals.majorThird, intervals.perfectFifth, intervals.majorSeventh],
    first: [intervals.minorThird, intervals.perfectFifth, intervals.minorSixth],
    second: [intervals.majorThird, intervals.perfectFourth, intervals.majorSixth],
    third: [intervals.minorSecond, intervals.perfectFourth, intervals.minorSixth]
}
 
const minorSeventh = {
    root: [intervals.minorThird, intervals.perfectFifth, intervals.minorSeventh],
    first: [intervals.majorThird, intervals.perfectFifth, intervals.majorSixth],
    second: [intervals.minorThird, intervals.perfectFourth, intervals.minorSixth],
    third: [intervals.majorSecond, intervals.perfectFourth, intervals.majorSixth]
}

const majorAdd9 = {
    root: [intervals.majorThird, intervals.perfectFifth, intervals.majorNinth],
    first: [intervals.minorThird, intervals.minorSixth, intervals.minorSeventh],
    second: [intervals.perfectFourth, intervals.perfectFifth, intervals.majorSixth],
    third: [intervals.majorSecond, intervals.majorThird, intervals.perfectFifth]
}
//chordBuilder needs the lowest note in the chord, the type (major or minor), and the inversion
//the output is the four notes to make up the final chord.  Does not need to be in numerical order.  Would be nice

const chordBuilder = (lowest, inversionArray) =>{
    let output = [lowest-12, lowest]
  
    for (const interval of inversionArray){
        output.push(lowest + interval)
    }
    console.log(output)
    return output
}


export { chordBuilder, majorTriad, minorTriad, intervals } 
