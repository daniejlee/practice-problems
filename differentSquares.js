function differentSquares(matrix) {
  let uniqueSquares = [];
  let current = ''
  let width = matrix[0].length
  let height = matrix.length

  for(let i = 0; i < height - 1; i++){
    for(let j = 0; j < width - 1; j++){
      current = matrix[i][j].toString() + matrix[i][j+1].toString() + matrix[i+1][j].toString() + matrix[i+1][j+1].toString()
      if(!uniqueSquares.includes(current)){
        uniqueSquares.push(current)
      }
    }
  }
  return uniqueSquares.length
}
