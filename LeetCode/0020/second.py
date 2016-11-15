# 从里面开始判断,存在则替换为空,不存在则返回错误

def isValid(s):
    b = ''
    while True:
        b = s
        s = s.replace("()", "").replace("{}", "").replace("[]", "")
        if b == s:
            break
    if not s:
        return True
    else:
        return False
if __name__ == '__main__':
    a = '{[][]}'
    print(isValid(a))