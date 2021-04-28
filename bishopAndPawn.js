function bishopAndPawn(bishop, pawn) {
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

console.log(bishopPosition, pawnPosition)

if(bishop[0] > pawn[0]){
    console.log('left')

  }
  else if(bishop[0] < pawn[0]){
    console.log('right')

  }
}
