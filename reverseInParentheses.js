function reverseInParentheses(inputString) {
  let wordInParentheses
  let parenthesesFound = false;
  let nested = 0;

  let nestedWord = '';
  let finalWord = '';
  let reverseWord = '';

  for(let i = 0; i < inputString.length; i++){

    if(parenthesesFound){

      if (nested === 0){
        if (inputString[i] === ")"){
          finalWord += reverseWord;
          parenthesesFound = false;
          reverseWord = '';
        }
        else if (inputString[i] !== ")" && inputString[i] !== "("){
          reverseWord = inputString[i] + reverseWord
          // console.log(reverseWord)
        }
        else if (inputString[i] === '('){
          nested++;
        }
      }

      else if(nested > 0){
        if (inputString[i] === ')'){
          nested--
          reverseWord = nestedWord + reverseWord
          nestedWord = ''
        }
        else if(nested > 0){
          nestedWord += inputString[i]
        }
        // console.log(nested)
        // console.log('nestedword: ', nestedWord)
      }

    }


    else if (!parenthesesFound){
      if (inputString[i] === '(') {
        parenthesesFound = true;
      }
      else{
        finalWord += inputString[i]
        //console.log(finalWord)
      }
    }
  }

  return finalWord
}
