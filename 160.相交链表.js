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
  // hash存储headA的所有节点，然后循环headB去匹配
  const map = new Map();
  let temp = headA;
  while (temp) {
    map.set(temp, 1);
    temp = temp.next;
  }
  temp = headB;
  while (temp) {
    if (map.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  return null;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = getIntersectionNode;
// @after-stub-for-debug-end