/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */

// 创建一个空数组 result，用于存储生成的有效括号组合。
// 定义一个辅助函数 backtrack，该函数接收三个参数：
// current：当前的括号组合字符串。
// open：当前已经使用的左括号数。
// close：当前已经使用的右括号数。
// 在 backtrack 函数中进行以下操作：
// 如果 open 和 close 的值都等于 n，则将 current 加入到 result 中，并返回。
// 如果 open 小于 n，则可以将一个左括号 "(" 加入到 current 中，并递归调用 backtrack(current + "(", open + 1, close)。
// 如果 close 小于 open，则可以将一个右括号 ")" 加入到 current 中，并递归调用 backtrack(current + ")", open, close + 1)。
// 在主函数中调用 backtrack，并将初始参数设置为("", 0, 0)。
// 返回 result，即为所有可能的有效括号组合。
var generateParenthesis = function (n) {

  const result = [];

  function backtrack(current, open, close) {
    if (open === n && close === n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
};
// @lc code=end

