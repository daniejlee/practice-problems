function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if(weight1 > maxW && weight2 > maxW){
    return 0
  }
  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  }

  let item1 = {
    value: value1,
    weight: weight1,
  }

  let item2 = {
    value: value2,
    weight: weight2,
  }

  let value = 0;
  if(weight1 <= maxW){
    value = value1;
  }
  if(weight2 <= maxW && value2 > value){
    value = value2;
  }
  return value;
}
