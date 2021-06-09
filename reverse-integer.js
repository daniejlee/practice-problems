/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  let negativeInt = false;
  let numString = x.toString();
  let reverseNum = "";
  if (numString[0] === "-") {
    negativeInt = true;
  }
  for (let i = numString.length - 1; i >= 0 && numString[i] != "-"; i--) {
    reverseNum += numString[i];
  }
  if (negativeInt) {
    reverseNum = "-" + reverseNum;
  }
  if (reverseNum > ((2 ** 31) - 1) || reverseNum < -(2 ** 31)) {
    return 0;
  }
  return reverseNum;
};
