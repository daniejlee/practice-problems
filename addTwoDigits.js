
function addTwoDigits(n) {
  let nString = n.toString();
  let sum = 0;
  for (let i = 0; i < nString.length; i++) {
    sum += parseInt(nString[i], 10);
  }
  return sum
}
