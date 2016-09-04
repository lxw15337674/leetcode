#这个是判断int中是否存在回文
def isPalindrome(x):
    x = str(x)
    answer = False
    sign = False
    if len(x)<=1:
        return True
    for a in range(len(x)//2):
        if x[a] == x[-1-a]:
            sign = True
        else:
            if sign:
                sign = False
    if sign:
        answer = True
    return answer

a = 1000021
print(isPalindrome(a))