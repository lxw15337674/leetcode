/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  //  层序遍历
  if (!root) {
    return []
  }
  const res = []
  const tra = (nodes) => {
    if (!nodes.length) {
      return
    }
    const nextNodes = []
    for (let node of nodes) {
      if (node?.children) {
        nextNodes.push(...node.children)
      }
    }
    res.push(nodes.map(node => node?.val))
    tra(nextNodes)
  }
  tra([root])
  return res
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = levelOrder;
// @after-stub-for-debug-end

levelOrder([])