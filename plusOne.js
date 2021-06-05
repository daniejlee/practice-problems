/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // let reverseArray = digits.reverse()
  // i = 0;
  // reverseArray[i] += 1;
  // while (reverseArray[i] > 9) {
  //   reverseArray[i] = 0;
  //   if (reverseArray[i + 1]) {
  //     reverseArray[i + 1] += 1
  //   } else {
  //     reverseArray[i + 1] = 1
  //   }
  //   i++
  // }

  // return reverseArray.reverse()

  console.log(digits.join('').toString())
  console.log(parseInt(digits.join('').toString(), 10))
  let str = parseInt(digits.join('').toString(), 10) + 1;
  return str.toString().split('');
};
