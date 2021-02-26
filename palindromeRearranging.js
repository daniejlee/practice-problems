function palindromeRearranging(inputString) {
 let arr = inputString.split('').sort();
 let numOdd = 0;
 let charCount = {};
 console.log(arr)

 arr.forEach((character)=>{
  if(character in charCount){

    charCount[character] += 1;
  }
  else {
    charCount[character] = 1;
  }
})
 console.log(charCount)

for(const char in charCount){
  if(charCount[char] % 2 === 1){
    numOdd++
    if (numOdd > 1) {
      return false;
    }
  }
}
return true;
}
