
def longestPalindrome(s):
    str = s
    palindrome = ''
    if len(str) == 1:
        return s
    a = 0
    list = []
    while a <= len(str) - 1:
        if a in list:
            break
        if len(palindrome) > len(str) - a:
            break
        end = len(str)
        while True:
            b = str.rfind(str[a], a + 1, end)
            if b != -1:  # 如果找到和a字符相同，则判断是否为回文，
                str1 = str[a:b + 1]
                if str1 == str1[::-1]:
                    if len(str1) > len(palindrome):
                        palindrome = str1
                    end = b
                else:
                    end = b
            else:
                break
        list.append(str[a])
        a += 1
    return palindrome


str = 'bb'
print(longestPalindrome(str))
# print(str[:-5:-3])