function stringsRearrangement(inputArray) {
  let currentCombo = [];
  if (new Set(inputArray).size !== inputArray.length && inputArray[0].length === 1) {
    return false;
  }

  console.log('meets requirement?',checkOneCharDifference(inputArray))
}

function checkOneCharDifference (array) {
  for(let i = 1; i < array.length; i++){
    let compare = array[i];
    for(let j = 0; j < array[i-1].length; j++){
      compare = compare.replace(array[i-1][j], '');
      // console.log('letter', array[i - 1][j])
      // console.log('j', 'at', compare)
    }
    if(compare.length > 1){
      return false;
    }
  }
  return true
}



function checkOneCharDifference2(array) {
  let array0 = array[0].split('')
  let array1 = array[1].split('');
  console.log(array0, array1)
  array1 = array1.filter(val => {
    return array0.indexOf(val.toString()) == -1;
  })
  console.log(array1)


  return true
}

function palindromeRearranging(inputString) {
  let arr = inputString.split('').sort();
  let numOdd = 0;
  let charCount = {};

  arr.forEach((character) => {
    if (character in charCount) {
      charCount[character] += 1;
    }
    else {
      charCount[character] = 1;
    }
  })
  for (const char in charCount) {
    if (charCount[char] % 2 === 1) {
      numOdd++
      if (numOdd > 1) {
        return false;
      }
    }
  }
  return true;
}
