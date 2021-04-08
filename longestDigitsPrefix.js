function longestDigitsPrefix(inputString) {
  if (!/^\d+$/.test(inputString[0])){
    return ""
  }

  let numString = ""
  let i = 0;
  while (/^\d+$/.test(inputString[i])){
    numString += inputString[i]
    i++
  }
  return numString
}
