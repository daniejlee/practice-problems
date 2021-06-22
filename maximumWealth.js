/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let maxWealth = 0;
  for(let i= 0; i < accounts.length; i++){
    let sum = accounts[i].reduce((acc, curr) => acc + curr)
    if (sum > maxWealth){
      maxWealth = sum;
    }
  }
  return maxWealth
};
