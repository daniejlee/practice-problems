/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let node = new ListNode(-1);
  let prev = node;
  let list = [];
  let curr = head;

  while (curr !== null) {
    list.push(curr);
    let next = curr.next;
    curr.next = null;
    curr = next;
  }

  while (list.length > 0) {
    let first = list.shift();
    let last = list.pop() || null;

    prev.next = first;
    first.next = last;
    prev = last;
  }

  return head;
};
