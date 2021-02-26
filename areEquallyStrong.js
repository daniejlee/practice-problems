function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if(yourLeft === friendsLeft){
    if(yourRight === friendsRight){
      return true;
    }
  }
  if(yourLeft === friendsRight){
    if(yourRight === friendsLeft){
      return true
    }
  }
  return false;
}
