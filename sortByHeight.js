function sortByHeight(a) {
  let treePositions = [];
  for(let i = a.length-1; i >= 0; i--){
    if(a[i] === -1){
      treePositions.unshift(i)
      a.splice(i, 1)
    }
  }

  a.sort((a, b) => a-b)
  for(let i = 0; i < treePositions.length; i++){
    a.splice(treePositions[i], 0, -1)
  }
  return a
}
