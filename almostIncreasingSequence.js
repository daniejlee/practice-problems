function almostIncreasingSequence(sequence) {
  let wrongCounter = 0;

  for(let i = 0; i < sequence.length; i++){
    if(sequence[i] <= sequence[i-1]){
      wrongCounter++
      console.log(sequence)
      console.log(i)
      if(wrongCounter > 1){
        return false;
      }
    }
  }
  return true;
}


// 1,2,1,2

// 1,2,6,3,5

// 10,1,2,3,4,5

// 1,2,3,10,3
