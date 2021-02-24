function addBorder(picture) {
  let borderLength = picture[0].length + 2;
  let borders = '';
  for(let i = 0; i < borderLength; i++){
    borders += "*"
  }

  for(let i = 0; i < picture.length; i++){
    picture[i] = '*' + picture[i] + '*'
  }


  picture.unshift(borders)
  picture.push(borders)
  return picture
}
