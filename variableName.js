function variableName(name) {
  //check if first char is a letter
  if(!name[0].match(/[a-z_]/i)){
    return false
  }
  //if string contains char not in regex, return false
  if(/[^0-9a-zA-Z_]/.test(name)){
    return false;
  }

  return true;
}
