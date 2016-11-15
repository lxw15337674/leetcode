def isValid(s):
    dict = {"(": ")", "[": "]", "{": "}"}
    #特殊情况
    b = len(s) - 1
    if b < 1 or len(s) % 2 != 0 or s[0] not in dict:
        return False

    stack = []
    for a in s:
        if a in dict:
            stack.append(a)
        else:
            if dict[stack.pop()] == a:
                continue
            else:
                return False
    return True if stack == [] else False

if __name__ == '__main__':
    a = ")}{({))[{{[}"
    b = isValid(a)
    print(b)
