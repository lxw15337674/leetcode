/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  let pre = null
  let next = null
  while (head) {
    next = head.next // 记录下一个节点。
    head.next = pre // 当前节点指针指向前一个节点
    pre = head //  pre赋为当前节点，作为下一次的前驱
    head = next // head为下一个节点，继续循环。
  }
  return pre
};
// @lc code=end
