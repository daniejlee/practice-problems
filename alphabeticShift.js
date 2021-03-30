function alphabeticShift(inputString) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let newWord = '';
  for (let i = 0; i < inputString.length; i++){
    if(inputString[i] === 'z'){
      newWord += 'a'
    }
    else{
      let alphaIndex = alphabet.indexOf(inputString[i]);
      newWord += alphabet[alphaIndex + 1]
    }
  }
  return newWord
}
