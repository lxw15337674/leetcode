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