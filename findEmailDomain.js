function findEmailDomain(address) {
  let domain = address.split('@')
  return domain.pop();
}
