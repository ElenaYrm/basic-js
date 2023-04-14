const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  const rows = matrix.length;
  const columns = matrix[0].length;
  // offset [row, column]
  const offset = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let r = 0; r < rows; r++) {
    result.push([]);
    for (let c = 0; c < columns; c++) {
      let count = 0;

      for (let i = 0; i < offset.length; i++) {
        const cellRow = r + offset[i][0];
        const cellCol =  c + offset[i][1];
        if (cellRow >= 0 && cellRow < rows && cellCol >= 0 && cellCol < columns && matrix[cellRow][cellCol]) {
          count ++;
        }
      }

      result[r].push(count);
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
