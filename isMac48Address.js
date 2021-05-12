function isMAC48Address(inputString) {
  if(inputString.length !== 17){
    return false;
  }
  // for (let i = 2; i < inputString.length; i += 3) {
  //   if (inputString[i] !== '-') {
  //     return false
  //   }
  // }

  // let newStr = inputString.replaceAll('-', '')
  // console.log(newStr)

  // for (let i = 0; i < newStr.length; i++) {
  //   console.log('i', i)
  //   if (!newStr[i].match(/[A-F0-9]/i)) {
  //     return false;
  //   }
  // }
  // return true

// console.log(inputString.length)
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
