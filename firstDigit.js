function firstDigit(inputString) {
  for(let i = 0; i < inputString.length; i++){
    if (/^\d+$/.test(inputString[i])){
      return inputString[i]
    }
  }
}
