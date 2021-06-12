/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target === 0){
    return 0;
  }
  let index = nums.findIndex(value=>{
    return value === target;
  })
  if (index === -1) {
    index = nums.findIndex(value => {
      return (value >= target);
    })
    if(index === -1){
      return nums.length
    }
  }
  return index;
};
