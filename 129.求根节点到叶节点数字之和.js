/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  // 思路：深度遍历
  let count = 0
  const tra = (str, node) => {
    str += node?.val ?? ''
    if (!node?.left && !node?.right && node) {
      count += Number(str)
    }
    if (node?.left) {
      tra(str, node.left)
    }
    if (node?.right) {
      tra(str, node.right)
    }
  }
  tra('', root)
  return count
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sumNumbers;
// @after-stub-for-debug-end