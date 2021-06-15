function largestNumber(n) {
  let k = '';
  for (let i = 0; i < n; i++) {
    k += '9';
  }
  return parseInt(k, 10);
}
