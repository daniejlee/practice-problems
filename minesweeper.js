function minesweeper(matrix) {
  let gridLength = matrix[0].length
  let gridHeight = matrix.length

  //convert boolean to 0 and 1
  let numberMatrix =  matrix.map((outer)=>{
    //setting inner arrays in matrix
    return outer.map(inner => inner ? 1 : 0);
  })
  console.log(matrix)
  console.log(numberMatrix)

  //empty matrix
  let newMatrix = Array(gridHeight).fill(Array(gridLength).fill(0))

  //let innerArray = [];

  for(let i = 0; i < gridHeight; i++){

    for(let j = 0; j < gridLength; j++){
      console.log('i',i,'j',j)
      console.log('minetest: ',numberMatrix[i][j])

      if(numberMatrix[i][j] === 1){
        console.log('before loop:', newMatrix)
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

        console.log('after 1 loop: ', newMatrix)

      }
    }
  }
  console.log('final', newMatrix)
  return newMatrix
}

/*
    let singleBox = 0;

     //
     if(i !== 0){

       if (matrix[i - 1][j - 1] === true){
         singleBox++
        }
        if(matrix[i-1][j] === true){
          singleBox++
        }
        if(matrix[i-1][j+1] === true){
          singleBox++
        }
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
*/





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
