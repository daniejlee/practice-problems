function findEmailDomain(address) {
  let domain = address.split('@')
  return domain[domain.length-1]
}
