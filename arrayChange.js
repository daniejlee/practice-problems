function arrayChange(inputArray) {
 // let prev = inputArray[0];
  let moveCounter = 0;
  for(let i = 1; i < inputArray.length; i++){
    while(inputArray[i] < inputArray[i-1]){
      inputArray[i]++
      moveCounter++
    }
  }
}
