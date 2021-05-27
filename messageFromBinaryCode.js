// function messageFromBinaryCode(code) {

//   let message = '';
//   let binary = '';
//   for(let i = 0; i < code.length; i++){
//     binary += code[i]

//     if(i % 8 === 0 && i !== 0){
//       console.log(binary)
//       message += String.fromCharCode(parseInt(binary, 2))
//       binary = '';
//     }

//   }
//   return message
// }


// function messageFromBinaryCode(code) {
//   let binaryArray = code.match(/.{1,8}/g);
//   let convert = binaryArray.map(x => {
//     return String.fromCharCode(parseInt(x, 2))
//   })
//   return convert.join('')
// }


function messageFromBinaryCode(code) {
  return code.match(/.{1,8}/g).map(x => String.fromCharCode(parseInt(x, 2))).join('')
}
