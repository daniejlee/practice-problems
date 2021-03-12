function minesweeper(matrix) {
  let gridLength = matrix[0].length
  let gridHeight = matrix.length

  //empty matrix
  let newMatrix = [];
  for (let i = 0; i < gridHeight; i++) {
    newMatrix.push(
      Array(gridLength).fill(0)
    )
  }

  for(let i = 0; i < gridHeight; i++){

    for(let j = 0; j < gridLength; j++){
      if(matrix[i][j] === true){
        //top row
        if(i > 0){
          if (j > 0){
            newMatrix[i - 1][j - 1]++
          }
          newMatrix[i - 1][j]++
          if (j < gridLength - 1) {
            newMatrix[i - 1][j + 1]++
          }
        }

        //middle row
        if (j > 0) {
          newMatrix[i][j - 1]++
        }
        if (j < gridLength - 1) {
          newMatrix[i][j + 1]++
        }

        //bottom row
        if(i < gridHeight - 1){
          if (j > 0) {
            newMatrix[i + 1][j - 1]++
          }
          newMatrix[i + 1][j]++
          if(j < gridLength - 1){
            newMatrix[i + 1][j + 1]++
          }
        }
      }
    }
  }
  return newMatrix
}
