import help from 'midi-help';

/**
 * A chord that will be used in our song with
 */
class Chord {
  /**
   * @param {string} name - name this chord
   * @param {number[]} midiNotes - array of midi notes for playing the chord
   * @param {string[]} vfPitches -  array of vexflow compatible notes for
   *        displaying the chord
   */
  constructor(name, midiNotes, vfPitches) {
    this.name = name;
    this.midiNotes = midiNotes;
    this.vfPitches = vfPitches;
  }

  /**
   * @param {[number]} velocity - optional velocity. default = 100
   * @param {[number]} channel - optional channel. default = midi channel 1
   * @returns {number[]} array of arrays. each inner array can be used with
   *          output.send
   */
  on(velocity, channel) {
    const events = [];

    velocity = typeof velocity === 'number' ? velocity : 100;

    for (const midiNote of this.midiNotes)
      events.push(help.noteOn(midiNote, velocity, channel));

    return events;
  }
}

/**
 * Generate midi notes for an open minor 7 chord
 * @param {number} num - root of midi chord
 * @param {bool} octUp - should we add an octave up?
 * @param {bool} octDown - should we add an octave down?
 * @returns {number[]} open chord
 */
function openMinor7MIDI(num, octUp, octDown) {
  const notes = [num, num + 7, num + 10, num + 15];

  if (octUp) notes.push(num + 12);
  if (octDown) notes.push(num - 12);

  return notes;
}

/**
 * Generate midi notes for an open major 7 chord
 * @param {number} num - root of midi chord
 * @param {bool} octUp - should we add an octave up?
 * @param {bool} octDown - should we add an octave down?
 * @returns {number[]} open chord
 */
function openMajor7MIDI(num, octUp, octDown) {
  const notes = [num, num + 7, num + 11, num + 16];

  if (octUp) notes.push(num + 12);
  if (octDown) notes.push(num - 12);

  return notes;
}

/**
 * Generate midi notes for an open minor 7 sharp 5 chord
 * @param {number} num - root of midi chord
 * @param {bool} octUp - should we add an octave up?
 * @param {bool} octDown - should we add an octave down?
 * @returns {number[]} open chord
 */
function openMinor7Sharp5MIDI(num, octUp, octDown) {
  const notes = [num, num + 8, num + 10, num + 15];

  if (octUp) notes.push(num + 12);
  if (octDown) notes.push(num - 12);

  return notes;
}

/**
 * Generate midi notes for an open minor 7 sharp 5 chord
 * @param {number} num - root of midi chord
 * @param {bool} octUp - should we add an octave up?
 * @param {bool} octDown - should we add an octave down?
 * @returns {number[]} open chord
 */
function open7MIDI(num, octUp, octDown) {
  // major 3rd, minor 7th
  const notes = [num, num + 7, num + 10, num + 16];

  if (octUp) notes.push(num + 12);
  if (octDown) notes.push(num - 12);

  return notes;
}

/**
 * Store a collection of chords that can be indexed by name or by index
 */
export default class ChordLibrary {

  /**
   * Create a chord library
   */
  constructor() {
    this.chords = [];
    this.chordsByName = {};
  }

  /**
   * @param {Chord} chord - the chord to add
   */
  push(chord) {
    if (!(chord instanceof Chord))
      throw new Error('ChordLibrary.push requires a Chord');

    if (this.chordsByName.hasOwnProperty(chord.name))
      console.warn(`Caution: overwriting ${chord.name} chord!`, this);

    this.chords.push(chord);
    this.chordsByName[chord.name] = chord;
  }

  /**
   * Push 'C Minor Anthem' chords onto this library
   */
  pushAnthem() {
    const chords = [
      new Chord('Cm7', openMinor7MIDI(48, true, true), ['c/4', 'g/4', 'b/4', 'e/5']),
      new Chord('Dm7#5', openMinor7Sharp5MIDI(50, true, true), ['d/4', 'b/4', 'c/5', 'f/5']),
      new Chord('EbMaj7', openMajor7MIDI(51, true, true), ['e/4', 'b/4', 'd/5', 'g/5']),
      new Chord('Fm7', openMinor7MIDI(53, true, true), ['f/4', 'c/5', 'e/5', 'a/5']),
      new Chord('Gm7', openMinor7MIDI(55, true, true), ['g/4', 'd/5', 'f/5', 'a/5']),
      new Chord('AbMaj7', openMajor7MIDI(56, true, true), ['a/4', 'e/5', 'g/5', 'c/6']),
      new Chord('Bb7', open7MIDI(58, true, true), ['b/4', 'f/5', 'a/5', 'd/6']),
      new Chord('Cm7+8va', openMinor7MIDI(60, true, true), ['c/5', 'g/5', 'b/5', 'e/6']),
    ];

    for (const chord of chords) this.push(chord);
  }
}
