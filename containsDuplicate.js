/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var containsDuplicate = function (nums) {
  let obj = {};
  for (let i of nums) {
    obj[i] = obj[i] ? obj[i] + 1 : obj[i] = 1;
  }
  let keys = Object.keys(obj);
  let count = 0;
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] >= 2) {
      count++;
    }
  }
  if (count > 0) {
    return true;
  }
  if (count === 0) {
    return false;
  }

};
