/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
 */
 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
	let resList = new ListNode();
	let p = resList;
	while (lists.some((item) => item)) {
		let minIndex = 0;
		for (let i = 1; i < lists.length; i++) {
      if(!lists[i]){
        continue 
      }
      if(!lists[minIndex]){
        minIndex=i
      }
      if(lists[i]&&lists[i].val < lists[minIndex].val){
        minIndex = i;
      }
		}
		let minList = lists[minIndex];
    if(!minList){
      break 
    }
		let node = minList.next
		minList.next = null;
		resList.next = minList
    lists[minIndex] = node
    resList=resList.next
	}
	return p.next;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = mergeKLists;
// @after-stub-for-debug-end