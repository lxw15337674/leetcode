####1	Two Sum
		Given an array of integers, return indices of the two numbers such that they add up to a specific target.
		给定一个整数数组，找出其中两个数满足相加等于你指定的目标数字。
			
			Example:
			Given nums = [2, 7, 11, 15], target = 9,
			Because nums[0] + nums[1] = 2 + 7 = 9,
			return [0, 1].
			
####2	Add Two Numbers
		You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
		你有两个没有负数的链表，这些数值以相反的顺序存储而且每一个节点包含一个单一的数字，两个链表相加，并将其作为链表返回
			Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
			Output: 7 -> 0 -> 8

####3	Longest Substring Without Repeating Characters
		Given a string, find the length of the longest substring without repeating characters.
		给定一个字符串，找到最长的没有重复字符的子串
			
			Examples:
			Given "abcabcbb", the answer is "abc", which the length is 3.
			Given "bbbbb", the answer is "b", with the length of 1.
			Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

####4. Median of Two Sorted Arrays				
		There are two sorted arrays nums1 and nums2 of size m and n respectively.
		计算两个已排序数组的中位数
	
####5  Longest Palindromic Substring  (做出来的超出时间限制)
		Given a string S, find the longest palindromic substring in S. You may assume that the maximum length of S is 1000, and there exists one unique longest palindromic substring.
		给一个字符串S，在s中找到最长的回文，你可以假设s的最大长度为10000，而且存在一个独一无二的最长回文

####6	ZigZag Conversion
		The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
		P   A   H   N
		A P L S I I G
		Y   I   R
		And then read line by line: "PAHNAPLSIIGYIR"
		给字符串a，按zigzag方式排列

####7   Reverse Integer
		Reverse digits of an integer.
		Example1: x = 123, return 321
		Example2: x = -123, return -321
		反转数
####8   String to Integer (atoi)
		将string类型的字符串转换成整型数据，类似于C++库里的atoi函数
	
####9   Palindrome Number
		Determine whether an integer is a palindrome. Do this without extra space.
		判断回文，题目要求只能用O(1)的空间，所以不能考虑把它转化为字符串然后reverse比较的方法。
		思路1：将输入整数转换成倒序的一个整数，再比较转换前后的两个数是否相等，但是这样需要额外的空间开销
		思路2：每次提取头尾两个数，判断它们是否相等，判断后去掉头尾两个数。

####10  Regular Expression Matching
		正则表达式匹配;
		'.' Matches any single character.
		'*' Matches zero or more of the preceding element.
		Some examples:
		isMatch("aa","a") → false
		isMatch("aa","aa") → true
		isMatch("aaa","aa") → false
		isMatch("aa", "a*") → true
		isMatch("aa", ".*") → true
		isMatch("ab", ".*") → true
		isMatch("aab", "c*a*b") → true
		
####11	Container With Most Water（最大水容器）
		Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). 
		n vertical lines are drawn such that thetwo endpoints ofline i is at (i, ai) and (i, 0). 
		Find twolines, which together with x-axis forms a container, such that the container containsthe most water.
		Note: You may not slant the container.
		x轴上在1,2,...,n点上有许多垂直的线段，长度依次是a1, a2, ..., an。找出两条线段，使他们和x抽围成的面积最大。面积公式是 Min(ai, aj) X |j - i|

####12  Integer to Roman
		Given an integer, convert it to a roman numeral.
		Input is guaranteed to be within the range from 1 to 3999.
		给整数转换为罗马数字.
			罗马数字有如下符号： 
			基本字符	I	V	X	L	C	D	M
			对应阿拉伯数字	1	5	10	50	100	500	1000
			
####13	Roman to Integer
		给roman数字转int

####14  Longest Common Prefix
		求所有字符串的最长公共前缀，即数组的所有字符串都包含这个前缀

####15  3Sum
		Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
		For example, given array S = [-1, 0, 1, 2, -1, -4],
		A solution set is:
		[
		  [-1, 0, 1],
		  [-1, -1, 2]
		]
		给一个由n个整数组成的列S,是否存在S中的a,b,c使得a+b+c=0?在列中找到独特的3个数.

####16  3Sum Closest
		Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.
		在给定数列中找出三个数，使和最接近 target。

####17	Letter Combinations of a Phone Number
		Given a digit string, return all possible letter combinations that the number could represent.
		A mapping of digit to letters (just like on the telephone buttons) is given below.
		给一个数字字符串,返回所有可能代表的字母组合.
		一个数字映射到字母的(就像在电话按钮上)

####18	4Sum（参考15题）
		Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

####19	Remove Nth Node From End of List(python不存在链表,所以不做)
		Given a linked list, remove the (n)th node from the end of list and return its head.
		For example,
		Given linked list: 1->2->3->4->5, and n = 2.
		After removing the second node from the end, the linked list becomes 1->2->3->5.
		给定一个链表，删除第n个节点，返回头

####20	Valid Parentheses
		Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
		The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

####21  Merge Two Sorted Lists(python不存在链表,所以不做)
		Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

####22	Generate Parentheses
		Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
		For example, given n = 3, a solution set is:
		[
		  "((()))",
		  "(()())",
		  "(())()",
		  "()(())",
		  "()()()"
		]
		给定一个非负整数n，生成n对括号的所有合法排列。

####23  Merge k Sorted Lists(python不存在链表,所以不做)
####24  Swap Nodes in Pairs (python不存在链表,所以不做)
####25	Reverse Nodes in k-Group(python不存在链表,所以不做)
####26	Remove Duplicates from Sorted Array
		Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
		Do not allocate extra space for another array, you must do this in place with constant memory.
		For example,
		Given input array nums = [1,1,2],
		Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
		给定一个排序的数组,删除重复的元素,使得每个元素只出现一次,并返回新的长度.
		不能为另一个数组分配额外的空间,必须在固定的内存中做到.