function chessBoardCellColor(cell1, cell2) {
  const column = ['a', 'c', 'e', 'g']
  const even = ['2', '4', '6', '8']
  let cell1Color, cell2Color;

  if(column.includes(cell1[0])){
    if(even.includes(cell1[1])){
      cell1Color = 'light';
    }
    else{
      cell1Color = 'dark';
    }
  }
  else{
    if (even.includes(cell1[1])) {
      cell1Color = 'dark';
    }
    else {
      cell1Color = 'light';
    }
  }

  if (column.includes(cell2[0])) {
    if (even.includes(cell2[1])) {
      cell2Color = 'light';
    }
    else {
      cell2Color = 'dark';
    }
  }
  else {
    if (even.includes(cell2[1])) {
      cell2Color = 'dark';
    }
    else {
      console.log('here')
      cell2Color = 'light';
    }
  }
  return cell1Color === cell2Color
}
