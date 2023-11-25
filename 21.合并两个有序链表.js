/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
// https://leetcode.cn/problems/merge-two-sorted-lists/solutions/226408/he-bing-liang-ge-you-xu-lian-biao-by-leetcode-solu/
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
	// 思路1：迭代
	const res = new ListNode(null, null)
	let cur = res
	while (list1 || list2) {
		if (list1?.val > list2?.val || !list1) {
			cur.next = list2
			list2 = list2.next
		} else {
			cur.next = list1
			list1 = list1.next
		}
		cur = cur.next
	}
	cur.next = null
	return res.next

	// 思路2：递归
	// 两个链表头部值较小的一个节点与剩下元素的 merge 操作结果合并。
	// if (list1 === null) {
	// 	return list2
	// }
	// if (list2 === null) {
	// 	return list1
	// }
	// if (list1.val > list2.val) {
	// 	list2.next = mergeTwoLists(list1, list2.next)
	// 	return list2
	// } else {
	// 	list1.next = mergeTwoLists(list1.next, list2)
	// 	return list1
	// }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end
