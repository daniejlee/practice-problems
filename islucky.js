function isLucky(n) {
  let numString = n.toString(10)
  let firstHalfSum = 0
  let secondHalfSum = 0
  for(let i = 0; i < numString.length/2; i++){
    firstHalfSum += +numString[i];
  }
  for (let i = numString.length / 2; i < numString.length; i++){
    secondHalfSum += +numString[i];
  }
  return (firstHalfSum === secondHalfSum)
}
