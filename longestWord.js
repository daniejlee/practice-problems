function longestWord(text) {
  let currentWord = '';
  let longestWord = '';

  for(let i = 0; i < text.length; i++){
    if (!(/[a-zA-Z]/).test(text[i])){
      if(currentWord.length > longestWord.length){
        longestWord = currentWord;
      }
      currentWord = '';
    }

    else{
      currentWord += text[i];
    }
  }
  if (currentWord.length > longestWord.length) {
    longestWord = currentWord;
  }
  return longestWord;
}
