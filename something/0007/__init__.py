def lol(s):
    # 字符串转为字典
    key = {}
    for a in s:
        if key.get(a) is None:
            key[a] = 1
        else:
            key[a] += 1

    # 通过value值排序
    list = []
    for a in range(len(key)):
        max = -1
        for b in key:
            value = key[b]
            if max < value:
                max = value
                target = b
        list.append(target)
        key.pop(target)

    # 字符串输出处理:
    result = ''
    for a in list:
        result += a + ','
    print(result[:-1])


if __name__ == '__main__':
    input = "dcbadcbadcbadde"
    lol(input)
    input = 'z'
    lol(input)
