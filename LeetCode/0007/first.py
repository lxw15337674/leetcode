class Solution(object):
    def reverse(self, x):
        a = str(x)
        if len(a) <= 1:
            return x
        if a[0] == '-':
            answer = '-'
            answer += a[:0:-1]
        else:
            answer = a[::-1]
        answer = int(answer)
        if answer >= 2147483647 or answer <= -2147483648:
            return 0
        return answer


