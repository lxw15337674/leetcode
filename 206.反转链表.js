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
	let pre = null; // 指向当前节点的前一个节点
	let cur = head; // 指向当前节点
	while (cur) {
		const next = cur.next; // 保存当前节点的下一个节点
		cur.next = pre; // 将当前节点的 next 指针指向前一个节点，实现反转
		pre = cur; // 更新 pre 指针为当前节点
		cur = next; // 更新 cur 指针为下一个节点，继续遍历链表
	}

	return pre; // 返回反转后的链表的头节点
};
// @lc code=end
