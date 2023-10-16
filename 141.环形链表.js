/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 哈希表
  // const map = new Map()
  // while (head) {
  //   if (map.has(head)) {
  //     return true
  //   }
  //   map.set(head, true)
  //   head = head.next
  // }
  // return false

  // 快、慢指针，从头节点出发
  // 慢指针每次走一步，快指针每次走两步，不断比较它们指向的节点的值
  // 如果节点值相同，说明有环。如果不同，继续循环。
  let fast = head, slow = head
  while (fast) {
    if (!fast.next) {
      return false
    }
    fast = fast?.next?.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  return false
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = hasCycle;
// @after-stub-for-debug-end