/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// https://leetcode.cn/problems/merge-k-sorted-lists/solutions/1143337/23-he-bing-kge-sheng-xu-lian-biao-by-che-0h21/
var mergeKLists = function (lists) {
  // 方法1：遍历比较,每次找到最小节点
  // 时间复杂度：O(nk)
  // const res = new ListNode(null)
  // let cursor = res
  // while (lists.some(node => node)) {
  //   let minIndex = 0
  //   for (let i = 0; i < lists.length; i++) {
  //     if (!lists[i]) {
  //       continue
  //     }
  //     if (lists[minIndex]?.val > lists[i]?.val || !lists[minIndex]) {
  //       minIndex = i
  //     }
  //   }
  //   cursor.next = lists[minIndex];
  //   cursor = cursor.next;
  //   lists[minIndex] = lists[minIndex]?.next
  // }
  // cursor = null
  // return res.next

  // 方法2： 基于方法1的改进，方法1每次遍历都要重新对每个节点进行比较，可以通过最小堆来优化
  // 使用小根堆对 1 进行优化，每次 O(logK) 比较 K个指针求 min, 时间复杂度：O(NlogK)
  const res = new ListNode(null, null);
  const list = []// 维护一个从大到小的队列
  const push = (node) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].val <= node.val) {
        list.splice(i, 0, node)
        return
      }
    }
    list.push(node)
  }
  for (let node of lists) {
    while (node) {
      push(node)
      node = node.next
    }
  }
  let cursor = res
  while (list.length) {
    cursor.next = list.pop()
    cursor = cursor.next
  }

  return res.next

// 方法3：分治，自底而上归并，第一次归并2个链表，第二次归并4个链表...，每次归并不断合并两个有序链表，直到合并完所有分治后的链表
// 复杂度：时间复杂度O(n * logk)，n是每个链表节点数，k个链表个数，每次归并，链表数量较少一半，复杂度是O(logk)，将两个链表合并成一个顺序链表复杂度是O(2n)，所以时间复杂度是 O(n * logk)。空间复杂度是O(logk)，即递归的空格复杂度
// 当是空数组的情况下
// if (!lists.length) {
//   return null;
// }
// // 合并两个排序链表
// const merge = (head1, head2) => {
//   let dummy = new ListNode(0);
//   let cur = dummy;
//   // 新链表，新的值小就先接谁
//   while (head1 && head2) {
//     if (head1.val < head2.val) {
//       cur.next = head1;
//       head1 = head1.next;
//     } else {
//       cur.next = head2;
//       head2 = head2.next;
//     }
//     cur = cur.next;
//   }
//   // 如果后面还有剩余的就把剩余的接上
//   cur.next = head1 == null ? head2 : head1;
//   return dummy.next;
// };
// const mergeLists = (lists, start, end) => {
//   if (start + 1 == end) {
//     return lists[start];
//   }
//   // 输入的k个排序链表，可以分成两部分，前k/2个链表和后k/2个链表
//   // 如果将这前k/2个链表和后k/2个链表分别合并成两个排序的链表，再将两个排序的链表合并，那么所有链表都合并了
//   let mid = (start + end) >> 1;
//   let head1 = mergeLists(lists, start, mid);
//   let head2 = mergeLists(lists, mid, end);
//   return merge(head1, head2);
// };
// return mergeLists(lists, 0, lists.length);


// 方法4：最简单，思想跟方法2一样，只是利用js的api排序，全部存到数组里面，然后排序，遍历
// const res = new ListNode(null)
// let cur = res
// const nodeList = []
// for (let node of lists) {
//   while (node) {
//     nodeList.push(node)
//     node = node.next
//   }
// }
// nodeList.sort((a, b) => a.val - b.val)
// for (let node of nodeList) {
//   cur.next = node
//   cur = cur.next
// }
// cur.next = null
// return res.next

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeKLists;
// @after-stub-for-debug-end