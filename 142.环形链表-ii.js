/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const map = new Set()
  let cur = head
  while (cur) {
    if (map.has(cur)) {
      return cur
    }
    map.add(cur)
    cur = cur.next
  }
  return null
};
// @lc code=end

