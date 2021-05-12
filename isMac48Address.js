function isMAC48Address(inputString) {
  if(inputString.length !== 17){
    return false;
  }

for(let i = 0; i < inputString.length; i++){
  if((i - 2) % 3 === 0){
    console.log('here', i)
    console.log(inputString[i])
    if(inputString[i] !== '-'){
      return false;
    }
  }
  else {
    if (!inputString[i].match(/[A-F0-9]/i)) {
      return false;
    }
  }
}

return true

}
