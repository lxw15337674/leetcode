/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // 方法一：递归
  // const traverse = (left, right) => {
  //   if (!left && !right) {
  //     return true
  //   }
  //   if ((!left && right) || (left && !right) || (left.val !== right.val)) {
  //     return false
  //   }
  //   return traverse(left?.left, right?.right) && traverse(left?.right, right?.left)
  // }
  // if (!root) {
  //   return false
  // }
  // return traverse(root.left, root.right)

  // 方法二：迭代
  if (!root) {
    return true
  }
  const queue = []
  queue.push(root.left, root.right)
  while (queue.length > 0) {
    const left = queue.shift();
    const right = queue.shift();

    if (!left && !right) {
      continue;
    }

    if ((!left || !right) || (left.val !== right.val)) {
      return false;
    }

    queue.push(left.left, right.right);
    queue.push(left.right, right.left);
  }

  return true;
};
// @lc code=end

