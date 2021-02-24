function alternatingSums(a) {
  let weight1 = 0;
  let weight2 = 0;
  let arr = [];
  for(let i = 0; i < a.length; i++){
    if(i % 2 === 0){
      weight1 += a[i]
    }
    else if (i % 2 === 1){
      weight2 += a[i]
    }
  }
  arr.push(weight1, weight2)
  return arr;
}
