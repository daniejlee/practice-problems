function digitDegree(n) {
let sum = n;
let count = 0;
  while(sum >= 10){
    let numString = sum.toString();
    sum = numString.split("").map(x => +x).reduce((a, b) => a + b, 0)
    count++
  }
  return count;
}
