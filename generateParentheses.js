/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var pairs = [];
  var generateString = function (left, right, string) {
    if (left > right) return;
    if (left == 0 && right == 0) {
      pairs.push(string);
    }

    if (left != 0) {
      generateString(left - 1, right, string + '(');
    }

    if (right != 0) {
      generateString(left, right - 1, string + ')');
    }
  }

  generateString(n, n, '');

  return pairs;
};
