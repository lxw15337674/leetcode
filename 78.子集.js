/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// https://leetcode.cn/problems/subsets/solutions/420458/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
var subsets = function (nums) {
  //集合中每个元素的选和不选，构成了一个满二叉状态树，比如，左子树是不选，右子树是选，从根节点、到叶子节点的所有路径，构成了所有子集。
  const res = [];

  const dfs = (index, list) => {
    if (index == nums.length) { // 指针越界
      res.push(list.slice());   // 加入解集
      return;                   // 结束当前的递归
    }
    list.push(nums[index]); // 选择这个数
    dfs(index + 1, list);   // 基于该选择，继续往下递归，考察下一个数
    list.pop();             // 上面的递归结束，撤销该选择
    dfs(index + 1, list);   // 不选这个数，继续往下递归，考察下一个数
  };
  dfs(0, []);
  return res;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = subsets;
// @after-stub-for-debug-end