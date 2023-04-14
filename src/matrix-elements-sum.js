const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  const rows = matrix.length;
  const columns = matrix[0].length;

  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      if (matrix[r][c] !== 0) {
        result += matrix[r][c];
      } else {
        break;
      }
    }
  }

  return result;
}

module.exports = {
  getMatrixElementsSum
};
