/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let str = digits.join('')
  if(str.length > 16){
    let arr = str.match(/.{1,16}/g);
    console.log(arr)
    let i = arr.length - 1;
    // if (arr[i].every(element => element == '9')){
    if (arr.every(element => element == '9')){
      // to do
    }
    else {
      let leadingZero = false;
      let zeroCount;
      if(arr[i].startsWith('0')){
        zeroCount = (arr[i].match(/^0+/) || [''])[0]
        leadingZero = true;
      }
      arr[i] = parseInt(arr[i], 10) + 1;
      arr[i] = arr[i].toString();
      if(leadingZero){
        arr[i] = zeroCount + arr[i]
      }
      return arr.join('').split('');
    }
  }
  else {
    return (parseInt(str, 10) + 1).toString().split('')
  }
};

// [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
