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


  //check boxes
  let box1 = [];
  let box2 = [];
  let box3 = [];
  for (let i = 0; i < 9; i++) {
    if(i === 3 || i === 6){
      box1 = [];
      box2 = [];
      box3 = [];
    }
    for (let j = 0; j < 9; j++) {
      let num = grid[i][j]
      if(j < 3){
        if (box1.includes(num)) {
          return false;
        }
        else {
          box1.push(num)
        }
      }
      else if(j < 6){
        if (box2.includes(num)) {
          return false;
        }
        else {
          box2.push(num)
        }
      }
      else if(j < 9){
        if (box3.includes(num)) {
          return false;
        }
        else {
          box3.push(num)
        }
      }
    }
  }


  return true;
}
