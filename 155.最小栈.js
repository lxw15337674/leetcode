/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start


https://leetcode.cn/problems/min-stack/solutions/2515950/zhan-jsban-ben-by-silly-almeidajbk-4fu2/?envType=study-plan-v2&envId=top-100-liked
// 思路：每个栈元素，保存用对应位置的最小值
var MinStack = function () {
  this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let length = this.stack.length
  this.stack.push({
    val: val,
    min: length == 0 ? val : Math.min(val, this.stack[length - 1].min)
  })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

