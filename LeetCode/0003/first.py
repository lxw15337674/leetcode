class Solution(object):
    def lengthOfLongestSubstring(self,s):
        """
        :type s: str
        :rtype: int
        """
        if s is None or s == '':
            return 0
        length = 1
        c = ''
        for a in s:
            if a in c:
                if length < len(c):
                    length = len(c)
                c = c[c.find(a)+1:]
            c += a
        if length < len(c):
            length = len(c)
        return length

