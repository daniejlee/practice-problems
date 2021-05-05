function reverseInParentheses(inputString) {
  let stringArray = inputString.split("")
  console.log(stringArray)
  let leftIndex, rightIndex;
  let leftCount = 0;


  console.log(stringArray.length)
  for(let i = 0; i < stringArray.length; i++){
    console.log(i)
    if(stringArray[i] === '('){
      if(leftCount === 0){
        leftIndex = i;
        leftCount++
      }
      else if(leftCount > 0){
        leftCount++
      }
    }


    else if(stringArray[i] === ')'){
      if(leftCount === 1){
        rightIndex = i;
        stringArray = reverseWords(leftIndex, rightIndex, stringArray)
        console.log(stringArray)
        i = 0;
        leftCount = 0;
      }
      else {
        leftCount--;
      }
    }
  }

  return stringArray.join('')
}


let reverseWords = (left, right, word) => {
  let wordInParenthesesReversed = word.slice(left + 1, right).reverse().map(x => {
    if(x === ')'){
      return '('
    }
    else if(x === '('){
      return ')'
    }
    else return x
  })
  word.splice(left, (right - left + 1), ...wordInParenthesesReversed)
  return word
}




// "foo(barbe(blam)ar)baz(blim)"
