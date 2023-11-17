/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 在这个算法中，我们首先判断根节点是否为空或者等于p或q节点之一。如果是，则直接返回根节点作为最近公共祖先。

  // 如果根节点不是p或q节点之一，那么我们递归地在左子树和右子树中寻找p和q的最近公共祖先。然后根据左右子树返回的结果进行判断：

  // 如果左子树和右子树都返回了非空节点，说明p和q分别位于根节点的两侧，此时根节点就是最近公共祖先，直接返回根节点。
  // 如果左子树返回了非空节点，而右子树返回了空节点，说明p和q都在左子树中，此时左子树返回的节点就是最近公共祖先。
  // 如果右子树返回了非空节点，而左子树返回了空节点，说明p和q都在右子树中，此时右子树返回的节点就是最近公共祖先。
  if (root === null || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left !== null && right !== null) {
    return root;
  } else if (left !== null) {
    return left;
  } else {
    return right;
  }
};
// @lc code=end

