var singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[nums.indexOf(nums[i], i + 1)]) {
        if (nums.indexOf(nums[i], i + 1) - i === 1) {
          nums.splice(i, 1);
          nums.splice(i, 1);
          i--;
        } else {
          nums.splice((nums.indexOf(nums[i], i + 1)), 1)
          nums.splice(i, 1);
          i--;
        }
      }
    }
  }
  return nums[0];
};
