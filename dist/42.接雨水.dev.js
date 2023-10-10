"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */
// @lc code=start

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function trap(height) {
  // 暴力解法
  var water = 0;

  for (var i = 0; i < height.length; i++) {
    var leftMax = Math.max.apply(Math, _toConsumableArray(height.slice(0, i)));
    var rightMax = Math.max.apply(Math, _toConsumableArray(height).concat([slice(i + 1, height.length - 1)]));
    water += Math.max(Math.min(rightMax, leftMax) - height[i], 0);
  }

  return water;
}; // @lc code=end