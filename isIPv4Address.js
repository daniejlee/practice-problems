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
  checkValid(subNum)
  if(periodCount === 3){
    return true;
  }
  else {
    return false;
  }
}

let checkValid = (numString) => {
  console.log(numString)
  let toNum = parseInt(numString, 10)
  console.log(toNum)
  return toNum >= 0 && toNum <= 255
}
