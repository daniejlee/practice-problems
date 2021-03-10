function matrixElementsSum(matrix) {
  let sum = 0;
  let hauntedColumns = [];
  for(let i = 0; i < matrix.length; i++){

    for(let j = 0; j < matrix[i].length; j++){
      if(hauntedColumns.includes(j)){
        continue;
      }

      if(matrix[i][j] === 0){
        if(!hauntedColumns.includes(j)){
          hauntedColumns.push(j)
        }
      }
      else{
        sum += matrix[i][j]
      }
    }
  }
  return sum;
}
