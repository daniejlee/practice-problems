function almostIncreasingSequence(sequence) {
  if(sequence.length <= 2){
    return true
  }
  if(sequence[0] > sequence[1]){
    sequence.splice(0, 1)
    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] <= sequence[i - 1]) {
        return false
      }
    }
    return true;
  }

  for(let i = 0; i < sequence.length; i++){
    if(sequence[i] <= sequence[i-1]){
      console.log(sequence[i-2])
      if (sequence[i] <= sequence[i - 2]){
        sequence.splice(i, 1)
      }
      else if (sequence[i] > sequence[i - 2]){
        sequence.splice(i-1, 1)
      }
      for(let j = 0; j < sequence.length; j++){
        if (sequence[j] <= sequence[j-1]){
          return false
        }
      }
      return true;
    }
  }
  return true;
}
