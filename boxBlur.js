function boxBlur(image) {
  let imageLength = image[0].length
  let imageHeight = image.length

  let blurredImage = [];
  let innerArray = []

  for (let i = 0; i < imageHeight - 2; i++) {

    for (let j = 0; j < imageLength - 2; j++) {
      let innerSquareSum = 0;
      innerSquareSum += (
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
