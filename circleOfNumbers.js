function circleOfNumbers(n, firstNumber) {

  if(n / 2 === firstNumber){
    return 0
  }
  else if(firstNumber < n / 2){
    return n / 2 + firstNumber
  }
  else{
    return firstNumber - n / 2
  }


}
