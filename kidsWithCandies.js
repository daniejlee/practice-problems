/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = 0;
  let arr = [];
  for(let i = 0; i < candies.length; i++){
    candies[i] > max ? max = candies[i] : ''
  }

  for(let i = 0; i < candies.length; i++){
    candies[i] + extraCandies >= max ? arr.push(true) : arr.push(false)
  }
  return arr
};
