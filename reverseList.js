/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let current = head,
    previous = null,
    index = 0;
  if (head === null) {
    return null
  }
  while (current.next !== null) {
    previous = current;
    current = current.next;
    current.prev = previous;
    index++;
  }

  previous = current;
  while (index-- > 0) {
    current.next = current.prev;
    delete current.prev;
    current = current.next;
  }
  current.next = null;
  return previous;
};
