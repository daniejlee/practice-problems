/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let luckyNumber = []
  let minRow = matrix.map(x => Math.min(...x))
  minRow.forEach(x => {
    for (let j = 0; j < matrix[0].length; j++) {
      let max = -Infinity
      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][j] > max) max = matrix[i][j]
      }
      if (x === max) luckyNumber.push(max)
    }
  })
  return luckyNumber
};
