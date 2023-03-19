/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let p1 = new ListNode(0, head)
  let p = p1
  for (let i = 0; i < n - 1; i++) {
    head = head.next
  }
  while (head.next) {
    head = head.next
    p1 = p1.next
  }
  p1.next = p1.next.next
  return p.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end