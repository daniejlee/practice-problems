function sudoku(grid) {
  //check horizontal lines
  for (let i = 0; i < 9; i++) {
    let rowCheck = [];
    let flag = false;
    grid[i].map(num => {
      if (rowCheck.includes(num)) {
        flag = true
      }
      else {
        rowCheck.push(num);
      }
    })
    if (flag) {
      return false
    }
  }


  //check vertical lines
  for (let i = 0; i < 9; i++) {
    let colCheck = [];
    for (let j = 0; j < 9; j++) {
      if (colCheck.includes(grid[j][i])) {
        return false;
      }
      else {
        colCheck.push(grid[j][i])
      }
    }
  }



  return true;
}
