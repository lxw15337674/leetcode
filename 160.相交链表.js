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
  //方法1： hash存储headA的所有节点，然后循环headB去匹配
  // const map = new Map();
  // let temp = headA;
  // while (temp) {
  //   map.set(temp, 1);
  //   temp = temp.next;
  // }
  // temp = headB;
  // while (temp) {
  //   if (map.has(temp)) {
  //     return temp;
  //   }
  //   temp = temp.next;
  // }
  // return null;

  // 方法2：一种情况是两个链表相交，第二种情况是两个链表不相交。
 
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = getIntersectionNode;
// @after-stub-for-debug-end