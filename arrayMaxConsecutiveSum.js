function arrayMaxConsecutiveSum(inputArray, k) {
  let largestSum = 0;
  for(let i = 0; i <= inputArray.length - k; i++){
    let currentSum = 0;
    for(let j = i; j < i + k; j++){
      currentSum += inputArray[j]
    }
    if(currentSum > largestSum){
      largestSum = currentSum;
    }
  }
  return largestSum
}
