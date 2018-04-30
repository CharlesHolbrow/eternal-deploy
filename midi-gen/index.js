var permute = require('heaps-permute');
var fs = require('fs');
var Midi = require('jsmidgen');

// Utility functions

function upAndDown(input) {
  var end = input.slice(0, -1).reverse();
  return input.concat(end);
}

function reorder(input, order) {
  var output = new Array(input.length);
  for (var [i, v] of input.entries()) {
    output[i] = input[order[i]];
  }
  return output;
}

function count(n) {
  return Array.apply(null, {length: n}).map(Number.call, Number)
}

function add(input, a) {
  var output = input.slice();
  return output.map((v) => {
    return v + a;
  });
}

function flatten(arrays) {
  return [].concat.apply([], arrays);
}

function writeNoteArray(notes, filename) {
  var file = new Midi.File();
  var track = new Midi.Track();
  file.addTrack(track);

  var delay = 0;
  for (var note of notes) {
    // negative values imply a rest
    if (note < 0) {
      delay += 64;
      continue;
    }

    track.addNote(0, note, 64, delay);
    delay = 0;
  }

  if (filename.slice(-4) !== '.mid')
    filename = filename + '.mid';

  fs.writeFileSync(filename, file.toBytes(), 'binary');
}

// so le te ti
// do re me fa
// so le te ti
// do re me fa

// 19 20 22 23
// 12 15 16 18
// 7  8  10 11
// 0  3  4  6

var patterns = [
  [0, 3, 7, 8, 12, 15, 19, 20],
  [3, 4, 8, 10, 15, 16, 20, 22],
  [4, 6, 10, 11, 16, 18, 22, 23],
];

var patterns2 = [
  patterns[0],
  patterns[0].slice(0, -1).reverse(),
  patterns[1],
  patterns[1].slice(0, -1).reverse(),
  patterns[2],
  patterns[2].slice(0, -1).reverse(),
];

function getPattern(patterns, i) {
  var index = i % (12 * patterns.length);
  var pIndex = index % patterns.length;
  var keyIndex = Math.floor(i / patterns.length);
  var interval = (keyIndex * 5) % 12

  if (interval > 7)
    interval -= 12
  return add(patterns[pIndex], interval);
}

var order = count(patterns[0].length);
var orders = permute(order).slice(0, 20);

var melodies = orders.map((order, i) => {
  var inputPattern = getPattern(patterns2, i);
  var pattern = reorder(inputPattern, order)

  // if (i%2) pattern.reverse();

  return add(pattern, 38);
});

for (var [i, melody] of melodies.entries()) {
  console.log(melody)
  writeNoteArray(melody, 'midi/m'+i)
}

var notes = flatten(melodies);
writeNoteArray(notes, 'midi/out');
