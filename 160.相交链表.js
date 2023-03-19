/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pa = headA
  let pb = headB
  while (pa !== pb) {
    if (pa) {
      pa = pa.next
    } else {
      pa = headB
    }
    if (pb) {
      pb = pb.next
    } else {
      pb = headA
    }
  }
  return pa
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = getIntersectionNode;
// @after-stub-for-debug-end