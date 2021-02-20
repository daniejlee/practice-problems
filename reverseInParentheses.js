function reverseInParentheses(inputString) {
  let wordInParentheses
  let parenthesesFound = false;
  let nested = 0;

  let reverseWord = '';
  let finalWord = '';
  for(let i = 0; i < inputString.length; i++){


    if(parenthesesFound){

      if (inputString[i] === ")"){
        finalWord += reverseWord;
        parenthesesFound = false;
        reverseWord = '';
      }
      else if (parenthesesFound && inputString[i] !== ")"){
        reverseWord = inputString[i] + reverseWord
      }

    }


    else if (!parenthesesFound){
      if (inputString[i] === '(') {
        parenthesesFound = true;
      }
      else{
        finalWord += inputString[i]
        console.log(finalWord)
      }
    }
  }

  return finalWord
}





// let reverse = (word) => {


//   if( '(' is found)
//   reverse()
// }




// // "foo(barbar(bazn(as(sfg)add)ar))blim"



// function reverseInParentheses(inputString) {
//   let wordInParentheses
//   let parenthesesFound = false;
//   let nested = 0;

//   let reverseWord = '';
//   let finalWord = '';
//   for (let i = 0; i < inputString.length; i++) {

//     if (inputString[i] === '(') {
//       parenthesesFound = true;
//     }
//     else if (parenthesesFound && inputString[i] !== ")") {
//       reverseWord = inputString[i] + reverseWord
//     }
//     else if (inputString[i] === ")") {
//       finalWord += reverseWord;
//       parenthesesFound = false;
//       reverseWord = '';
//     }
//     else {
//       finalWord += inputString[i]
//       console.log(finalWord)
//     }
//   }

//   return finalWord
// }
