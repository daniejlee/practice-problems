function add(param1, param2){
  return param1 + param2
}

function centuryFromYear(year) {
  return Math.ceil(year/100)
}

function checkPalindrome(inputString) {
  let flag = true;
  let counter = 0;
  for(let i = inputString.length - 1; i >= 0; i--){
    if(inputString[i] !== inputString[counter]){
      return false;
    }
    counter++
  }
  return flag
}
