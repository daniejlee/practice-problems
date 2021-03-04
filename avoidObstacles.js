function avoidObstacles(inputArray) {

  let currentTest = 2;
  while(currentTest <= Math.max(...inputArray) + 1){
    if(inputArray.includes(currentTest)){
      currentTest++
    }
    else {
      for (let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] % currentTest === 0){
          currentTest++
          break
        }

        if(i === inputArray.length - 1){
          console.log(i)
          return currentTest
        }
      }
    }
  }
}


//check if currentTest is in the array;
//if yes, go next loop iteration
// if no, check if all multiples of currentTest are in the array
