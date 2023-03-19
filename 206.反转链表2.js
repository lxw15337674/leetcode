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
  console.log(head);
  if (head === null || head.next === null) { //递归终止条件
    return head
  }
  const newHead = reverseList(head.next);//递归调用reverseList
  head.next.next = head //到了递归最后一层的时候，让后面一个节点指向前一个节点
  head.next = null //前一个节点的next置为空
  return newHead //返回最后一个节点

};
// @lc code=end
