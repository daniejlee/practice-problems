function isIPv4Address(inputString) {
  let periodCount = 0;
  let subNum = '';
  for(let i = 0; i < inputString.length; i++){
    if(inputString[i] === '.'){
      if(!checkValid(subNum)){
        return false
      }
      subNum = '';
      periodCount++
    }
    else {
      subNum += inputString[i];
    }
  }
  if (!checkValid(subNum)) {
    return false
  }
  if(periodCount === 3){
    return true;
  }
  else {
    return false;
  }
}

let checkValid = (numString) => {
  if(isNaN(numString)){
    return false
  }
  if(numString[0] === '0' && numString[1]){
    return false
  }
  let toNum = parseInt(numString, 10)
  return toNum >= 0 && toNum <= 255
}