/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null) { //递归终止 遍历完了链表
    return head
  }
  head.next = removeElements(head.next, val) //递归调用函数removeElements
  return head.val === val ? head.next : head //如果当前元素值是val，则返回下一个元素，否则直接返回当前元素
};
// @lc code=end

