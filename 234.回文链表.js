// https://leetcode.cn/problems/palindrome-linked-list/solutions/457288/shou-hua-tu-jie-hui-wen-lian-biao-kuai-man-zhi-zhe/

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
 * @return {boolean}
 */
var isPalindrome = function (head) {
	// 方法一：将值复制到数组中后用双指针法
	const array = []
	while (head) {
		array.push(head.val)
		head = head.next
	}
	let left = 0, right = array.length - 1
	while (left < right) {
		if (array[left] !== array[right]) {
			return false
		}
		left++
		right--
	}
	return true

	// 方法二：快慢指针,快慢指针，起初都指向表头，快指针一次走两步，慢指针一次走一步，遍历结束时：

};
// @lc code=end
