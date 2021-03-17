function variableName(name) {
  if(!name[0].match(/[a-z]/i)){
    return false
  }
  if(!name.match(/[1-9][a-z][_]/i)){
    return false;
  }

  return true;
}
