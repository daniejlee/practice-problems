/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let arr = []
  for(let i = 0; i < nums.length; i++){
    arr.push(nums.reduce((acc, current) => {
      if(current < nums[i]){
        return acc + 1
      }
      else{
        return acc
      }
    }, 0))
  }
  return arr;
};


      // return current < nums[i] ? acc + 1 : acc
