/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let arr = []
  for(let i = 0; i < nums.length; i++){
    arr.push(nums.reduce((acc, current) => current < nums[i] ? acc + 1 : acc, 0))
  }
  return arr;
};
