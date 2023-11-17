/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function (head) {
  // 存到数组里，再进行排序，再重新连接
  if (!head) {
    return head
  }
  let cur = head
  const array = []
  while (cur) {
    array.push(cur)
    cur = cur.next
  }
  array.sort((a, b) => a.val - b.val)
  cur = array[0]
  for (let i = 1; i < array.length; i++) {
    cur.next = array[i]
    cur = cur.next
  }
  cur.next = null
  return array[0]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sortList;
// @after-stub-for-debug-end