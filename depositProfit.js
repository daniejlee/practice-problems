function depositProfit(deposit, rate, threshold) {
  let yearCounter = 0;
  let yearlyGrowth = deposit;

  while(yearlyGrowth < threshold){
    yearlyGrowth += (yearlyGrowth * rate/100)
    yearCounter++;
  }
  return yearCounter
}
