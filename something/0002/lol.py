n = raw_input()
if n != "":
    n = int(n) - 1
    up = 1
    answer = 1
    while 1:

        if n > up:
            answer += up - 1
            n -= up + 1
            up += 1
        else:
            answer += n
            print(answer)
            break
