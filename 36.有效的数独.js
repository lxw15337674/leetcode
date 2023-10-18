/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const boxes = new Array(9).fill(0).map(() => new Array(9).fill(0));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        const num = parseInt(board[i][j]) - 1;
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        if (rows[i][num] || columns[j][num] || boxes[boxIndex][num]) {
          return false;
        }

        rows[i][num] = 1;
        columns[j][num] = 1;
        boxes[boxIndex][num] = 1;
      }
    }
  }

  return true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isValidSudoku;
// @after-stub-for-debug-end