function almostIncreasingSequence(sequence) {
  let wrongCounter = 0;
  if(sequence[0] > sequence[1]){
    wrongCounter++
    sequence.splice(0, 1)
  }

  for(let i = 0; i < sequence.length; i++){
    if(sequence[i] <= sequence[i-1] && sequence[i] <= sequence[i-2]){
      sequence.splice(i, 1)
      wrongCounter++
      i--
    }
    else if (sequence[i] <= sequence[i - 1] && sequence[i] > sequence[i - 2]){
      sequence.splice(i-1, 1)
      wrongCounter++
      i--
    }
    else if (sequence[i] === sequence[i - 1]){
      sequence.splice(i, 1)
      wrongCounter++
      i--
    }

    if (wrongCounter > 1) {
      return false;
    }

  }
  return true;
}
