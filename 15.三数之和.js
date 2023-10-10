/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	function twoSum(nums, target) {
		let left = 0, right = nums.length - 1, res = []
		while (left < right) {
			const count = nums[left] + nums[right];
			if (count > target || nums[right + 1] === nums[right]) {
				right--;
				continue;
			}
			if (count < target || nums[left - 1] === nums[left]) {
				left++;
				continue;
			}
			if (count === target) {
				res.push([nums[left], nums[right]]);
				left++;
				continue;
			}
		}
		return res
	}
	const res = [];
	// 首先将原数组进行升序排序
	nums = nums.sort((a, b) => a - b);
	// 遍历数组，寻找三数之和为 0 的数对
	for (let i = 0; i < nums.length; i++) {
		// 如果当前元素与前一个元素相同，跳过本次循环
		if (nums[i] === nums[i - 1]) {
			continue;
		}
		// 在当前元素后面的数组中寻找两数之和为 -nums[i] 的数对，并加入结果数组中
		for (let item of twoSum(nums.slice(i + 1), -nums[i])) {
			res.push([nums[i], ...item]);
		}
	}
	return res;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end
