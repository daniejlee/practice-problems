function fileNaming(names) {
  let newFileNames = [];
  let newName;

  for(let i = 0; i < names.length; i++){
    let num = 0;
    newName = names[i]
    while(newFileNames.includes(newName)){
      num++
      newName = names[i] + '(' + num + ')';
    }
    newFileNames.push(newName)
  }
  return newFileNames
}
