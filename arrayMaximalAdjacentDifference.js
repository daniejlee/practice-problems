function arrayMaximalAdjacentDifference(inputArray) {
  let max = 0;
  for(let i = 0; i < inputArray.length; i++){
    let current = Math.abs(inputArray[i] - inputArray[i + 1])
    if(current > max){
      max = current
    }
    // max = (current > max)
    // ? current
    // : max;
  }
  return max
}
