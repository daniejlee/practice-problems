/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let jewelCount = 0;
  for(let i = 0; i < stones.length; i++){
    jewels.includes(stones[i]) ? jewelCount++ : '';
  }
  return jewelCount
};
