function areSimilar(a, b) {
  let mismatches = 0;
  let m1, m2;
  let mismatchIndices = [];
  for(let i = 0; i < a.length; i++){
    if (a[i] !== b[i]){
      mismatches++;
      mismatchIndices.push(i);
    }
  }
  console.log('mismatches: ', mismatches)


  if(mismatches === 0){
    return true
  }
  else if (mismatches > 2){
    return false
  }
  else {
    m1 = mismatchIndices[0];
    m2 = mismatchIndices[1]
    if(a[m1] === b[m2] && a[m2] === b[m1]){
      return true;
    }
    else{
      return false;
    }
  }

}
