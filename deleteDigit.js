function deleteDigit(n) {
  let numString = n.toString();
  let max = 0;
  let numRemoved;
  for(let i = 0; i < numString.length; i++){
    numRemoved = numString.slice(0, i) + numString.slice(i + 1)
    let num = parseInt(numRemoved, 10)
    if(num > max){
      max = num
    }
  }
  return max;
}
