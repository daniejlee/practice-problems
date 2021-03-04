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
          return currentTest
        }
      }
    }
  }
}
