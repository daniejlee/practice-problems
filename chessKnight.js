function chessKnight(cell) {
  let alphaNum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  }
  let movecount = 0;
  let knightPosition = [alphaNum[cell[0]], parseInt(cell[1], 10)];

//topright
  if(knightPosition[0]+1 <= 8 && knightPosition[1]+2 <= 8){
    movecount++
  }
  if(knightPosition[0]+2 <= 8 && knightPosition[1]+1 <= 8){
    movecount++
  }
//bottomright
  if(knightPosition[0]+2 <= 8 && knightPosition[1]-1 >= 1){
    movecount++
  }
  if(knightPosition[0]+1 <= 8 && knightPosition[1]-2 >= 1){
    movecount++
  }
//bottomleft
  if(knightPosition[0]-1 >= 1 && knightPosition[1]-2 >= 1){
    movecount++
  }
  if(knightPosition[0]-2 >= 1 && knightPosition[1]-1  >= 1){
    movecount++
  }
//topleft
  if(knightPosition[0]-2 >= 1 && knightPosition[1]+1 <= 8){
    movecount++
  }
  if(knightPosition[0]-1 >= 1 && knightPosition[1]+2 <= 8){
    movecount++
  }

  return movecount
}
