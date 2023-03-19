/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode.cn/problems/4sum/description/
 *
 * algorithms
 * Medium (37.35%)
 * Likes:    1528
 * Dislikes: 0
 * Total Accepted:    425K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 *
 *
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 *
 * 你可以按 任意顺序 返回答案 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	const twoSum = (nums, target) => {
		const res = [];
		let left = 0;
		let right = nums.length - 1;
		while (left < right) {
			const count = nums[left] + nums[right];
			if (count < target || nums[left] === nums[left - 1]) {
				left++;
				continue;
			}
			if (count > target || nums[right] === nums[right + 1]) {
				right--;
				continue;
			}
			if (count === target) {
				res.push([nums[left], nums[right]]);
				left++;
			}
		}
		return res;
	};
	const nSum = (nums, target, length) => {
		let res = [];
		if (length > 2) {
			for (let i = 0; i < nums.length; i++) {
				if (nums[i] === nums[i - 1]) {
					continue;
				}
				const count = nums[i];
				const subArray = nSum(nums.slice(i + 1), target - count, length - 1);
				subArray.forEach((item) => {
					res.push([count, ...item]);
				});
			}
		} else {
			res = twoSum(nums, target);
		}
		return res;
	};
	nums = nums.sort((a, b) => a - b);
	return nSum(nums, target, 4);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = fourSum;
// @after-stub-for-debug-end
