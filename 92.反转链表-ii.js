/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const node = new ListNode()
  node.next = head
  let pre = node
  for (let i = 1; i < left; i++) {
    pre = pre.next
  }
  let leftNode = pre.next //记录左链
  let rightNode = pre  //记录右链
  for (let i = left; i <= right; i++) {
    rightNode = rightNode.next
  }
  let curr = rightNode.next;//保存rightNode.next
  pre.next = null
  rightNode.next = null

  const reverseLinkedList = (head) => {
    let pre = null;
    let cur = head;

    while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
  }

  reverseLinkedList(leftNode)
  pre.next = rightNode
  leftNode.next = curr
  return node.next

};
// @lc code=end

