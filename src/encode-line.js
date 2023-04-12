const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let result = '';

  let count = 1;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i]) {
      if (arr[i] === arr[i - 1]) {
        count ++;
      } else {
        if (count === 1) {
          result = result + arr[i - 1];
        } else {
          result = result + count + arr[i - 1];
        }
        count = 1;
      }
    } else {
      if (count === 1) {
        result = result + arr[i - 1];
      } else {
        result = result + count + arr[i - 1];
      }
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
