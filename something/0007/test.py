key = {'d': 5, 'e': 1, 'c': 3, 'b': 3, 'a': 3}
list = []
for a in range(len(key)):
    max = -1
    target = 0
    for b in key:
        value = key[b]
        if max < value:
            max = value
            target = b
    list.append(target)
    key.pop(target)
print(list)

