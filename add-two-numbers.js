/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let current = l1;
  let string1 = "";
  while (current !== null) {
    string1 = current.val + string1;
    current = current.next;
  }

  current = l2
  let string2 = "";
  while (current !== null) {
    string2 = current.val + string2;
    current = current.next;
  }

  let sum = BigInt(string1) + BigInt(string2);

  let sumString = sum.toString();

  let node, temp;
  for (let i = 0; i < sumString.length; i++) {
    if (!node) {
      node = new ListNode(sumString[i])
    }
    else {
      temp = new ListNode(sumString[i]);
      temp.next = node;
      node = temp;
    }
  }
  return node
};
