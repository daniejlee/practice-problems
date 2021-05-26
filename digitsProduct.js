function digitsProduct(product) {
  for(let i = 1; i <= 10000; ++i){
    if (findProduct(i) == product){
      return i
    }
  }
  return -1
}

function findProduct(n){
  let p = 1;
  while (n !== 0) {
    p *= n % 10;
    n /= 10;
  }
  return p
}
