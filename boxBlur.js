function boxBlur(image) {
  let imageLength = image[0].length
  let imageHeight = image.length

  let blurredImage = [];
  let innerArray = []
  console.log(image)

  //height of new Array
  for(let i = 0; i < imageHeight - 2; i++){

    //sets length of new Array
    for(let j = 0; j < imageLength - 2; j++){
      let innerSquareSum = 0;
      innerSquareSum += (
        image[i][j] + image[i][j + 1] + image[i][j + 2] +
        image[i + 1][j] + image[i + 1][j + 1] + image[i + 1][j + 2]+
        image[i + 2][j] + image[i + 2][j + 1] + image[i + 2][j + 2]
        )
        console.log(innerSquareSum)
        innerArray.push(Math.floor(innerSquareSum/9))
    }
    blurredImage.push(innerArray)
    console.log(blurredImage)
  }
  return blurredImage
}



// image[0][0] + image[0][1] + image[0][2] +
// image[1][0] + image[1][1] + image[1][2] +
// image[2][0] + image[2][1] + image[2][2]
