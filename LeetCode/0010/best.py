def isMatch(s, p):
    for a in range(len(s)):
        for b in range(a, len(p) - a - 1):
            # print(b)
            # print(b, s[b], p[a])
            if s[b] != p[a] and p[a] != '.':
                # answer = isMatch(s[b:], p[a + 2:])
                return print(s[b:], p[a + 2:])
        # answer = isMatch(s[len(p) - a - 1:], p[len(p) - a - 1:])
        return print(s[len(p) - a - 1:], p[len(p) - a - 1:])

        # return answer
        # print(s[b + 2:], p[a + 2:])


a = 'aaaa'
b = "a*a"
print(isMatch(a, b))
