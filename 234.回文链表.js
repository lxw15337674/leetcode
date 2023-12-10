/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
// https://leetcode.cn/problems/palindrome-linked-list/solutions/457288/shou-hua-tu-jie-hui-wen-lian-biao-kuai-man-zhi-zhe/
var isPalindrome = function (head) {
  // 方法一：将值复制到数组中后用双指针法
  // const array = []
  // while (head) {
  //   array.push(head.val)
  //   head = head.next
  // }
  // let left = 0, right = array.length - 1
  // while (left < right) {
  //   if (array[left] !== array[right]) {
  //     return false
  //   }
  //   left++
  //   right--
  // }
  // return true

  // 方法2：利用链表的后续遍历，使用函数调用栈作为后序遍历栈，来判断是否回文
  let left = head;
  function traverse(right) {
    if (right === null) return true;
    let res = traverse(right.next);
    if (right.val !== left.val || !res) {
      return false
    }
    left = left.next
    return res
  }
  return traverse(head);

  // 方法3：利用字符串记录
  // let a = '', b = '';
  // while (head != null) {
  //   a = a + head.val;
  //   b = head.val + b;
  //   head = head.next;
  // }
  // return a===b
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end