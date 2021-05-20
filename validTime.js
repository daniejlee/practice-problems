function validTime(time) {
  let hour = parseInt(time[0] + time[1], 10)
  let minute = parseInt(time[3] + time[4], 10)
  if (hour >= 24 || minute >= 60){
    return false
  }
  else{
    return true
  }
}
