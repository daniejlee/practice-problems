function minesweeper(matrix) {
  let gridLength = matrix[0].length
  let gridHeight = matrix.length
  console.log(gridLength)
  console.log(gridHeight)
  let newMatrix = [];
  let innerArray = [];


  for(let i = 0; i < gridHeight; i++){

    for(let j = 0; j < gridLength; j++){
     let singleBox = 0;

     //
      if (matrix[i - 1][j - 1] === true){
       singleBox++
     }
     if(matrix[i-1][j] === true){
       singleBox++
     }
     if(matrix[i-1][j+1] === true){
       singleBox++
     }
     //
      if (matrix[i][j - 1] === true) {
        singleBox++
      }
      if (matrix[i][j + 1] === true) {
        singleBox++
      }
      //
      if (matrix[i + 1][j - 1] === true) {
        singleBox++
      }
      if (matrix[i + 1][j] === true) {
        singleBox++
      }
      if (matrix[i + 1][j + 1] === true) {
        singleBox++
      }

      innerArray.push(singleBox)
      console.log(innerArray)
    }
    newMatrix.push(innerArray)
    innerArray = [];
  }
  return newMatrix
}



/*
function boxBlur(image) {
  let imageLength = image[0].length
  let imageHeight = image.length

  let blurredImage = [];
  let innerArray = []

  for (let i = 0; i < imageHeight - 2; i++) {

    for (let j = 0; j < imageLength - 2; j++) {
      let innerSquareSum = (
        image[i][j] + image[i][j + 1] + image[i][j + 2] +
        image[i + 1][j] + image[i + 1][j + 1] + image[i + 1][j + 2] +
        image[i + 2][j] + image[i + 2][j + 1] + image[i + 2][j + 2]
      )
      innerArray.push(Math.floor(innerSquareSum / 9))
    }
    blurredImage.push(innerArray)
    innerArray = []
  }
  return blurredImage
}

*/
