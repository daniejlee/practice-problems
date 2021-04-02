function extractEachKth(inputArray, k) {
  let newArr = [];
  for(let i = 1; i <= inputArray.length; i++){
    if(i % k !== 0){
      newArr.push(inputArray[i-1])
    }
  }
  return newArr
  // let newArr = inputArray.filter((element, index)=>{
  //   console.log(index)
  //   if(index - 1 % k !== 0){
  //     return element
  //   }
  // })
  // return newArr
}
