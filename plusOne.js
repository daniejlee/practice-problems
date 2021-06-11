/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let str = digits.join('')

  if (digits.every(element => element == '9')){
    let arr = digits.map(x => x = 0)
    arr.unshift('1');
    return arr;
  }

  if(str.length > 16){
    let arr = str.match(/.{1,16}/g);
    console.log(arr)
    let i = arr.length - 1;
    console.log(arr.every(element => element == '9'))
    console.log(arr)

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
  else {
    return (parseInt(str, 10) + 1).toString().split('')
  }
};

const checkForNines = str => {
  for(let i = 0; i < str.length; i++){
    if(str[i] !== '9'){
      return false;
    }
  }
  return true;
}
