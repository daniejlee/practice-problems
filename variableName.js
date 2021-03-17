function variableName(name) {
  if(!name[0].match(/[a-z_]/i)){
    return false
  }
  if(!name.match(/[1-9a-z_]/i)){
    return false;
  }

  return true;
}
