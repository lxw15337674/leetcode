/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
	// 创建两个链表，用于存储小于 x 和大于等于 x 的节点
	let preList = new ListNode(); // 存储小于 x 的节点
	let afterList = new ListNode(); // 存储大于等于 x 的节点
	const pev = preList; // 记录小于 x 的节点链表的头部
	const after = afterList; // 记录大于等于 x 的节点链表的头部

	// 遍历原始链表，将节点插入到对应的链表中
	while (head) {
		if (head.val >= x) {
			// 如果节点的值大于等于 x，则插入到 afterList 中
			afterList.next = head;
			afterList = afterList.next;
		} else {
			// 否则插入到 preList 中
			preList.next = head;
			preList = preList.next;
		}
		// 将当前遍历到的节点从原始链表中分离出来。
		const node = head.next;
		head.next = null;
		head = node;
	}
	// 将小于 x 的节点链表拼接到大于等于 x 的节点链表的尾部
	preList.next = after.next;
	// 返回小于 x 的节点链表的头部，即 pev.next
	return pev.next;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = partition;
// @after-stub-for-debug-end