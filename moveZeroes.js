/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let temp = null;
  let prevZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      if (prevZero != i) {
        temp = nums[i];
        nums[prevZero] = temp;
        nums[i] = 0;
      }
      prevZero++;
    }
  }
};
