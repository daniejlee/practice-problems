function makeArrayConsecutive2(statues) {
  let min = Math.min(...statues)
  let max = Math.max(...statues)
  return max-min+1-statues.length
}
