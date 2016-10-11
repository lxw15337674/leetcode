def maxArea(height):
    answer = 0;
    for a in range(len(height)):
        for b in range(a+1,len(height)):
            temp = min(height[a],height[b]) * (b-a)
            if temp>answer:
                answer = temp
    return answer



if __name__ == '__main__':
    list1 = [1,1]
    maxArea(list1)