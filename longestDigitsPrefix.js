function longestDigitsPrefix(inputString) {
  let numString = ""
  let i = 0;
  while (/^\d+$/.test(inputString[i])){
    numString += inputString[i]
    i++
  }
  return numString
}
