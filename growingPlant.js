function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let days = 0;
  let height = 0;
  while(height < desiredHeight){
    height += upSpeed;
    days++;
    if(height >= desiredHeight){
      return days
    }
    height -= downSpeed
  }
}
