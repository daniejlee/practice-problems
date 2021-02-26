function palindromeRearranging(inputString) {
 let arr = inputString.split('').sort();
 let numOdd = 0;
 let charCount = {};

 arr.forEach((character)=>{
  if(character in charCount){
    charCount[character] += 1;
  }
  else {
    charCount[character] = 1;
  }
})
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
