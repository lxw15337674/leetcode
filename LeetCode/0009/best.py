class Solution(object):
    def isPalindrome(self, x):
        x = str(x)
        answer = True
        if len(x)<=1:
            return True
        for a in range(len(x)//2):
            if x[a] != x[-1 - a]:
                answer = False
        return answer