/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let preList = new ListNode()
  let afterList = new ListNode()
  const pev = preList
  const after = afterList
  while (head) {
    if (head.val >= x) {
      afterList.next = head
      afterList = afterList.next
    } else {
      preList.next = head
      preList = preList.next
    }
    const node = head.next
    head.next = null
    head = node
  }
  preList.next = after.next
  return pev.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = partition;
// @after-stub-for-debug-end