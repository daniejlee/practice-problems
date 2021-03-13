function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  for (i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      inputArray[i] = substitutionElem
    }
  }
  return inputArray
}

//using map
function arrayReplace2(inputArray, elemToReplace, substitutionElem) {
  let newArr = inputArray.map(x => x === elemToReplace ? substitutionElem : x)
  return newArr
}
