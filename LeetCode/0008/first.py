class Solution(object):
    def myAtoi(self, str):
        if str == '':
            return 0
        answer = ''
        sign = False
        for a in str:
            if a == ' ':
                if sign == True:
                    break
                continue
            if a == '-':
                if sign == True:
                    break
                sign = True
                answer += '-'
                continue
            if a == '+':
                if sign == True:
                    break
                sign = True
                continue
            if '0' <= a <= '9':
                sign = True
                answer += a
            else:
                break
        if answer == '' or answer == '-':
            return 0
        answer = int(answer)
        if answer >= 2147483647:
            return 2147483647
        if answer <= -2147483648:
            return -2147483648
        return answer