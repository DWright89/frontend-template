import {chordBuilder, minorTriad, majorTriad, intervals} from "../src/chordGenerator"
//npm run test in backend

test('The chord generator should generate all invesions of C major', () => {
  expect(chordBuilder(60, majorTriad.root)).toStrictEqual([48, 60, 64, 67]);
  expect(chordBuilder(64, majorTriad.first)).toStrictEqual([52, 64, 67, 72]);
  expect(chordBuilder(67, majorTriad.second)).toStrictEqual([55, 67, 72, 76]);
});

test('The chord generator should generate all inversions of A minor', () =>{
  expect(chordBuilder(57, minorTriad.root)).toStrictEqual([45, 57, 60, 64])
  expect(chordBuilder(60, minorTriad.first)).toStrictEqual([48,60,64,69])
  expect(chordBuilder(64, minorTriad.second)).toStrictEqual([52,64,69,72])
})