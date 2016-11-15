# 穷举法
def threeSum(nums):
    nums.sort()
    answer = []
    for a in range(len(nums)):
        if nums[a] > 0:
            break
        for b in range(a + 1, len(nums)):
            if nums[a] + nums[b] > 0:
                break
            for c in range(b + 1, len(nums)):
                if nums[a] + nums[b] + nums[c] > 0:
                    break
                if nums[a] + nums[b] + nums[c] == 0 and [nums[a], nums[b], nums[c]] not in answer:
                    answer.append([nums[a], nums[b], nums[c]])
                    break
    return answer


if __name__ == '__main__':
    S = [-1, 0, 1, 2, -1, -4]
    print(threeSum(S))
