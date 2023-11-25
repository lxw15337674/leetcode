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
	// 思路：三个指针，preNode、currentNode、NextNode，从开始进行遍历并交换前后节点。
	let pre = null, cursor = head
	while (cursor) {
		const next = cursor.next
		cursor.next = pre
		pre = cursor
		cursor = next
	}
	return pre
};
// @lc code=end
