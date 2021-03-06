function sumUpNumbers(inputString) {
  let current = '';
  let sum = 0;
  for(let i = 0; i < inputString.length; i++){
    if ((/^\d+$/).test(inputString[i])){
      current += inputString[i];
    }
    else {
      if(current !== ''){
        sum += parseInt(current, 10)
        current = '';
      }
    }
  }
  if (current !== '') {
    sum += parseInt(current, 10)
  }
  return sum;
}
