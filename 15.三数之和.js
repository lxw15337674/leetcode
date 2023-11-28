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
	const twoSum = (nums, target) => {
		let left = 0, right = nums.length - 1, res = [];
		while (left < right) {
			if (target === nums[left] + nums[right]) {
				res.push([nums[left], nums[right]]);
				left++;
				right--;
				// 去重逻辑
				while (left < right && nums[left] === nums[left - 1]) {
					left++;
				}
				while (left < right && nums[right] === nums[right + 1]) {
					right--;
				}
			} else if (target > nums[left] + nums[right]) {
				left++;
			} else {
				right--;
			}
		}
		return res;
	};

	// 排序
	nums.sort((a, b) => a - b);
	const res = [];
	for (let i = 0; i < nums.length - 2; i++) {
		// 去重逻辑
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
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
