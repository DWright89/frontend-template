CURRENT PLAN:
The top level component will contain the actual 'instrument', with as many additional functions being imported in.

SO FAR THIS WORKS IN A REGULAR COMPONENT FUNCTION

The function MIDISounds.playChordWhen will be used to play the chord sequence, which will be fed into state by a form nested inside

MIDI notation works like this: 
Notes are numbered from 0-127. Every integer is a half step.
-Pattern for a scale is root, +2, +2, +1, +2, +2, +2, +1
-60 is middle C.
- Adding or subtracting 12 will go up or down one octave
-For now, I will limit the key to C, but will generate the chords mathematically so as to hopefully make the transition to
any key an easy one

An example chord will look like this: [60, 64, 67] for a root position C, E, G triad

I will use four-note chords, allowing the user to select which inversion, and doubling the lowest note with an octave below (-12)
Every chord is an array of notes to be played simultaneously

example inversions: 
Root Position: C E G [60, 64, 67]
First Inversion, 6/3: E G C [64, 67, 72]
Second Inversion, 6/4: G C E [67, 72, 76]

I want to give the user a choice of which chord to choose, using a dropdown menu and jazz notation
options will be, descending: I, ii, iii, IV, V, vi, vii

Selecting the chord will determine the root note: 60, 62, 64, 65, 67, 69, 59 (the 7 chord will start lower to keep from going too high)

Later, if key is implemented, the key will determine the overall root note, and chord roots will be calculated off of that.

Next, the user will choose the inversion of the chord: root, first, or second.
Root position will result in a triad array, first inversion will START with a triad array, and +12 the first note, 
second inversion will start with a triad array and +12 the first and second notes. the final step for all three will be to identify the lowest note by numerical value, and add another note 12 below that for an octave in the bass

Once the form is filled out, state can go to the top-level component to be run through the playChordAt() function.

Each chord progression will have either a user-generated or random-word name, will be saved to a database, and will have a dynamic show page.  
(allow for the show page to let users vote for the chords they like and display the top 10??)



Other things the instructors want for criteria:
External API integration:
random word API for an optional title for user creations:  https://random-word-api.herokuapp.com/word?number=2
Hooktheory API for the following: https://www.hooktheory.com/api/trends/docs

In addition to naming the chords with jazz notation, the form will also track the chords numarically: 1, 2, 3, 4...
It will use the hooktheory API to submit the user's chords at /trends/songs?cp=chord1,chord2,chord3,chord4 to return an array
of songs that contain those chords.  I will probably have options to search for the first two chords, and one to find matches for all four.



at least three DB tables.  
One table can be used to save the chords created by users.  Arrays are bad in DB columns, but I could store the chords like:
id | name | chord1Note1 | chord1Note2 | chord1Note3 ...  |chord1Inversion| Chord2Inversion|chordProgression | else...

another table can hold primary keys for the different chords:
id | name
1     I
2     I first inversion
3     I second inversion
...

A join table can keep track of which songs use which chords.  This would allow me to display the most popular chords chosen.





WANT:  to add some logic in to keep the chords from getting too high.  if(note to be added > 79){note to be added -12 to go an octave down.  This would mess up the inversions but could be a clever "keep everything tight" feature}
