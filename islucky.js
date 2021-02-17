function isLucky(n) {
  let firstHalfSum = 0
  let secondHalfSum = 0
  for(let i = 0; i < n.length/2; i++){
    firstHalfSum += n[i];
  }
  for(let i = n.length/2; i < n.length; i++){
    secondHalfSum += n[i];
  }

  return (firstHalfSum === secondHalfSum)
}
