function buildPalindrome(st) {
  let reverseStr = st.split("").reverse().join("");
  let addToEnd = ''
  while(reverseStr.length > 0){
    if(isPalindrome(reverseStr)){
      return st + addToEnd
    }
    else{
      addToEnd = reverseStr.slice(-1) + addToEnd
      reverseStr = reverseStr.slice(0, -1)
    }
  }
}

const isPalindrome = (word) => {
  return word == word.split('').reverse().join('');
}


// find longest palindrome within the string, starting from the end of string
// add remainder of string to the end
