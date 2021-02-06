function allLongestStrings(inputArray) {
  let maxLength = inputArray[0].length;
  let newArr = []
  for(let i = 0; i < inputArray.length; i++){
    if (inputArray[i].length > maxLength){
      maxLength = inputArray[i].length
    }
  }
  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i].length === maxLength){
      newArr.push(inputArray[i])
    }
  }
  return newArr
}
