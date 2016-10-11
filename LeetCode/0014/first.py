class Solution(object):
    def longestCommonPrefix(self, strs):
        if not strs:
            return ""
        Min = min(strs, key=len)
        if Min == '':
            return ''
        for a in range(len(Min)):
            Common = strs[0][a]
            for b in strs[1:]:
                if b[a] != Common:
                    if a == 0:
                        return ''
                    return b[:a]
        return Min

