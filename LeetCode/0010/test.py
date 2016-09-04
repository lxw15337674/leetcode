class Solution(object):
    def isMatch(self, s, p):
        print(s, p, '1')
        if s == p or p == '.*':
            return True
        if len(s) != len(p) and '*' not in p:
            return False
        if len(s) < len(p) - p.count("*") * 2 or p == '':
            return False
        for a in range(len(s)):
            # print(a)
            # 处理结尾
            if a + 1 == len(p):
                if s[a] != p[a] and p[a] != '.':
                    return False
                return True
            # 处理带有*
            if p[a + 1] == '*':
                # 处理*不匹配的，直接去掉*和前面的字符
                if s[a] != p[a] and p[a] != '.':
                    answer = self.isMatch(s[a:], p[a + 2:])
                    return answer
                else:
                    # 处理.*
                    if p[a] == '.':
                        # print('1')
                        length = len(p) - (a + 2)
                        answer = self.isMatch(s[len(s) - length:], p[length + 1:])
                        return answer
                    # 处理*匹配的
                    else:
                        for b in range(a, len(p) - a):
                            # print(b,a,len(p) - a - 1)
                            # print(b,s[b],p[a],a,len(p) - a - 1)
                            # 循环到*不匹配的后，去掉前面已匹配的字符
                            try:
                                if s[b] != p[a]:
                                    answer = self.isMatch(s[b:], p[a + 2:])
                                    return answer
                            except:
                                length = len(p) - (a + 2)
                                answer = self.isMatch(s[len(s) - length:], p[length + 1:])
                                return answer
                        length = len(p) - (a + 2)
                        answer = self.isMatch(s[len(s) - length:], p[length + 1:])
                        return answer
            # 处理不带*
            else:
                if s[a] != p[a] and p[a] != '.':
                    return False
        return True



