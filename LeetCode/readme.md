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