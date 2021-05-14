function lineEncoding(s) {
  let currentLetter = s[0];
  let currentCount = 0;
  let finalString = ''
  for(let i = 0; i < s.length; i++){
    if(s[i] === currentLetter){
      currentCount++;
    }
    else if (s[i] !== currentLetter){
      if(currentCount === 1){
        finalString += currentLetter
      }
      else{
        finalString += currentCount + currentLetter
      }
        currentLetter = s[i]
        currentCount = 1;
    }
  }
  if (currentCount === 1) {
    finalString += currentLetter
  }
  else {
    finalString += currentCount + currentLetter
  }
  return finalString
}
