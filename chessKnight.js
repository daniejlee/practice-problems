function chessKnight(bishop, pawn) {
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
let bishopPosition = [alphaNum[bishop[0]], parseInt(bishop[1], 10)];
let pawnPosition = [alphaNum[pawn[0]], parseInt(pawn[1], 10)];


  if(bishop[0] > pawn[0]){
    if (pawn[1] > bishop[1]) {
      for (let i = bishop[1]; i <= 8; i++) {
        bishopPosition[0]--
        bishopPosition[1]++
        if (bishopPosition[0] === pawnPosition[0] && bishopPosition[1] === pawnPosition[1]) {
          return true;
        }
      }
    }
    else if (pawn[1] < bishop[1]) {
      for (let i = bishop[1]; i >= 0; i--) {
        bishopPosition[0]--
        bishopPosition[1]--
        if (bishopPosition[0] === pawnPosition[0] && bishopPosition[1] === pawnPosition[1]) {
          return true;
        }
      }
    }
  }



  else if(bishop[0] < pawn[0]){
    if(pawn[1] > bishop[1]){
      for(let i = bishop[1]; i <= 8; i++){
        bishopPosition[0]++
        bishopPosition[1]++
        if(bishopPosition[0] === pawnPosition[0] && bishopPosition[1] === pawnPosition[1]){
          return true;
        }
      }
    }
    else if (pawn[1] < bishop[1]) {
      for (let i = bishop[1]; i >= 0; i--) {
        bishopPosition[0]++
        bishopPosition[1]--
        if (bishopPosition[0] === pawnPosition[0] && bishopPosition[1] === pawnPosition[1]) {
          return true;
        }
      }
    }
  }
  return false;

}
