function arrayChange(inputArray) {
  let moveCounter = 0;
  for (let i = 1; i < inputArray.length; i++) {
    while (inputArray[i] <= inputArray[i - 1]) {
      inputArray[i]++
      moveCounter++
    }
  }
  return moveCounter
}
