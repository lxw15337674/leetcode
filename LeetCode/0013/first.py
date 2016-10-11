def romanToInt(s):
    dict = {'L': 50, 'D': 500, 'CM': 900, 'C': 100, 'XL': 40, 'M': 1000, 'I': 1, 'V': 5, 'XC': 90, 'IV': 4, 'X': 10,
            'CD': 400,
            'IX': 9}
    answer = 0
    while len(s) > 0:
        if dict.get(s[0:2]) is not None and len(s) >= 2:
            answer += dict.get(s[0:2])
            s = s[2:]
            continue
        if dict.get(s[0]) is not None and len(s) >= 1:
            answer += dict.get(s[0])
            s = s[1:]

    return answer


if __name__ == '__main__':
    a = 'CDIX'
    print(romanToInt(a))
