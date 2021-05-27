function messageFromBinaryCode(code) {

  let message = '';
  let binary = '';
  for(let i = 0; i < code.length; i++){
    binary += code[i]

    if(i % 8 === 0 && i !== 0){
      console.log(binary)
      message += String.fromCharCode(parseInt(binary, 2))
      binary = '';
    }

  }
  return message
}
