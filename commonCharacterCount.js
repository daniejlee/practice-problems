function commonCharacterCount(s1, s2) {
  let s1Arr = s1.split("")
  let s2Arr = s2.split("")
  let commonCount = 0;
  let common;
  if(s1Arr.length > s2Arr.length){
    for(let i = 0; i < s1Arr.length; i++){
      common = s2Arr.indexOf(s1Arr[i])
      if(common >= 0){
        commonCount++
        s2Arr.splice(common, 1)
      }
    }
  }
  else if(s1Arr.length <= s2Arr.length){
    for (let i = 0; i < s2Arr.length; i++) {
      common = s1Arr.indexOf(s2Arr[i])
      if (common >= 0) {
        commonCount++
        s1Arr.splice(common, 1)
      }
    }
  }

  return commonCount
}
