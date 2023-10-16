/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	const res = new ListNode(null, null)
	let cur = res
	while (list1 && list2) {
		if (list1.val > list2.val) {
			cur.next = list2
			list2 = list2.next
		} else {
			cur.next = list1
			list1 = list1.next
		}
		cur = cur.next
	}
	while (list1) {
		cur.next = list1
		list1 = list1.next
		cur = cur.next
	}
	while (list2) {
		cur.next = list2
		list2 = list2.next
		cur = cur.next
	}
	return res.next
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end
