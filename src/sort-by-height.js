const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [];
  const clearArr = arr.filter((item) => item !== -1);
  clearArr.sort((a, b) => a - b);
  let count = 0;

  for (let item of arr) {
    if (item !== -1) {
      result.push(clearArr[count]);
      count++;
    } else {
      result.push(item);
    }
  }

  return result;
}

module.exports = {
  sortByHeight
};
