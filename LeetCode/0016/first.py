def threeSumClosest(nums, target):
    nums.sort()
    answer = nums[0] + nums[1] + nums[-1]
    for a in range(len(nums) - 2):
        b = a + 1
        c = len(nums) - 1
        while b < c:
            sum = nums[b] + nums[c] + nums[a]
            if sum == target:
                return sum
                break
            if abs(answer - target) > abs(sum - target):
                answer = sum
            if sum > target:
                c -= 1
                continue
            else:
                b += 1
    return answer


if __name__ == '__main__':
    list = [-10,0,-2,3,-8,1,-10,8,-8,6,-7,0,-7,2,2,-5,-8,1,-4,6]
    print(threeSumClosest(list, 18))
