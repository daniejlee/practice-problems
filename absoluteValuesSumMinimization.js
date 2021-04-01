function absoluteValuesSumMinimization(a) {
  let lowestValue;
  for(let i = 0; i < a.length; i++){

    let eachElement = a.map(element => Math.abs(element - a[i]))
    let sum = eachElement.reduce((a,b) => a + b, 0)

  }

}
