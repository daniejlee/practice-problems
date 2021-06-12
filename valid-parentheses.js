/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let newString = s;
  let flag = true;
  let oldLength;
  while (newString.length !== 0 && flag) {
    oldLength = newString.length;
    newString = newString.replace(/\[]|\(\)|\{}/g, '')
    if (oldLength === newString.length) {
      flag = false;
    }
  }
  return flag;
};
