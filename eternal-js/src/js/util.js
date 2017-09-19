const oneOverThree = 1 / 3;
const twoOverThree = 2 / 3;

function isClose(a, b) {
  return Math.abs(a - b) < 0.000001;
}

/**
 * @param {Number} durationInBeats - the length of the bea
 * @param {String} The vexflow duration
 * @return {string} a vexflow duration
 */
export function floatToVexflowDuration(durationInBeats) {
  if (typeof durationInBeats !== 'number')
    throw new Error('durationInBeats must be a number');

  if (durationInBeats === 1) return 'q';
  if (durationInBeats === 2) return 'h';
  if (durationInBeats === 4) return 'w';

  console.error(`floatToVexFlowDuration got unsupported value: ${durationInBeats}`);

  return 'q';
}
