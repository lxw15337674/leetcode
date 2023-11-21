/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let isFind = false;
  const tra = (node, sum) => {
    if (isFind || !node) {
      return;
    }
    sum -= node.val; // 更新 sum

    // 必须是叶子节点
    if (!node.left && !node.right && sum === 0) {
      isFind = true;
      return;
    }

    tra(node.left, sum); // 递归调用时传入更新后的 sum
    tra(node.right, sum);
  };
  tra(root, targetSum);
  return isFind;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = hasPathSum;
// @after-stub-for-debug-end