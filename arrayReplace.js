function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  for (i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      inputArray[i] = substitutionElem
    }
  }
  return inputArray
}
