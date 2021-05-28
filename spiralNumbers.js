function spiralNumbers(n) {
  let max = n*n;
  let matrix = [];
  for(let i = 0; i < n; i++){
    matrix.push([]);
  }
  let yPos = 0;
  let xPos = 0;

  let yLimit = n - 1;
  let xLimit = n - 1;
  let yBottom = 1;
  let xBottom = 0;

  let xAscending = true;
  let yAscending = false;
  let xDescending  = false;
  let yDescending  = false;

  matrix[0][0] = 1;

  for(let i = 2; i <= max; i++){
    if(xAscending){
      xPos++;
      if(xPos === xLimit){
        xAscending = false;
        yAscending = true;
        xLimit--;
      }
    }
    else if (yAscending) {
      yPos++;
      if (yPos === yLimit) {
        yAscending = false;
        xDescending = true;
        yLimit--;
      }
    }
    else if (xDescending){
      xPos--;
      if (xPos === xBottom) {
        xDescending = false;
        yDescending = true;
        xBottom++;
      }
    }
    else if (yDescending) {
      yPos--;
      if (yPos === yBottom) {
        yDescending = false;
        xAscending = true;
        yBottom++;
      }
    }

    matrix[yPos][xPos] = i;
  }
  return matrix

}
