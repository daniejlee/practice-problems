function digitsProduct(product) {
  for(let i = 1; i <= 10000; i++){
    if (findProduct(i) == product){
      return i
    }
  }
  return -1
}

function findProduct(n){
  let numString = n.toString();
  let product = 1;
  for(let i = 0; i < numString.length; i++){
    product *= numString[i]
  }
  return product;
}
