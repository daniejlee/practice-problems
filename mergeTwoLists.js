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
var mergeTwoLists = function (l1, l2) {
  let arr = [];
  let head1 = l1
  let head2 = l2
  while (head1 !== null) {
    arr.push(head1.val)
    head1 = head1.next;
  }

  while (head2 !== null) {
    arr.push(head2.val)
    head2 = head2.next;
  }
  console.log(arr)
  arr.sort((a, b) => a - b);
  console.log(arr)

  let list = arr.reverse().reduce((acc, curr) => {
    if (acc == null) {
      acc = new ListNode(curr);

    } else {
      acc = new ListNode(curr, acc);
    }
    return acc;
  }, null);

  return list
};
