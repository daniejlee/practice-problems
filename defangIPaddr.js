/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  console.log(typeof(address))
  return address.replace(/\./g, '[.]')
};
