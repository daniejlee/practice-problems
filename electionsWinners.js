function electionsWinners(votes, k) {
  let possibleWinners = 0;
  let topCand = Math.max(...votes)
  for(let i = 0; i < votes.length; i++){
    if (votes[i] + k > topCand){
      possibleWinners++
    }
  }
  return possibleWinners
}
