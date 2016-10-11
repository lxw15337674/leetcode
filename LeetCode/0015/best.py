#方法就是先排序，然后利用头尾指针找到两个数使得他们的和等于target,
def threeSum(nums):
    answer = []
    nums.sort()
    for a in range(len(nums)):
        if nums[a] > 0:
            break
        b = a + 1
        c = len(nums) - 1
        while b < c:
            if nums[b] + nums[c] > -nums[a]:
                c -= 1
                continue
            if nums[b] + nums[c] == -nums[a]:
                if [nums[a], nums[b], nums[c]] not in answer:
                    answer.append([nums[a], nums[b], nums[c]])
                b += 1
                continue
            else:
                b += 1
                continue
    return answer


if __name__ == '__main__':
    list = [-2, 0, 1, 1, 2]
    print(threeSum(list))
