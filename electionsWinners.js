function electionsWinners(votes, k) {
  let possibleWinners = 0;
  let topCand = Math.max(...votes)

  if(k === 0){
    let count = votes.filter(x => x === topCand).length
    if(count === 1){
      return 1
    }
    else{
      return 0
    }
  }

  for(let i = 0; i < votes.length; i++){
    if (votes[i] + k > topCand){
      possibleWinners++
    }
  }
  return possibleWinners
}
