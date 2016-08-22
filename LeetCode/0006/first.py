def convert(s, numRows):
    answer = ''
    if numRows==1:
        return s
    num = 2 * (numRows - 1)  # 每次排列的数字个数
    n = len(s) // num  # 能排列的次数
    x = len(s) % num  # 余数
    # 第一列
    for a in range(n):
        answer += s[a * num]
    if x >0: #处理余数
        answer +=s[n*num]
    #中间列
    if n==0:
        for b in range(1, numRows - 1):
            if x > 0:  # 处理余数
                if x >= b + 1:
                    answer += s[n * num + b]
                    if x >= num - b + 1:
                        answer += s[(n + 1) * num - b]
    for a in range(n):
        for b in range(1,numRows-1):
            answer += s[a*num+b]
            answer += s[(a+1)*num-b]
            if x>0:#处理余数
                if x>=b+1:
                    answer += s[n * num + b]
                    if x>=num-b+1:
                        answer += s[(n+1) * num - b]

    #最后列
    for a in range(n):
        answer += s[numRows-1+a * num]
    if x >= numRows:  # 处理余数
        answer += s[numRows-1+n * num]
    return answer


s = 'AB'
rows = 3
print(convert(s, rows))

