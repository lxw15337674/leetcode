class Solution(object):
    def longestPalindrome(self, s):
        if self.isP(s): return s
        substr = ['']
        l = 0
        res = ''
        for i in s:
            substr += [i + sub for sub in substr]
        # substr=substr[::-1]
        for item in substr:
            if self.isP(item):
                if len(item) > l:
                    res = item
                    l = len(item)
        return res


def isP(self, s):
    return s == s[::-1]
