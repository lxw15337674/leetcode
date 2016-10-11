class Solution(object):
    def maxArea(self, height):
        Maxarea = 0
        i = 0
        j = len(height) - 1
        while i < j:
            area = (j - i) * min(height[i], height[j]);
            if Maxarea < area: Maxarea = area
            if height[i] < height[j]:
                i += 1;
            else:
                j -= 1;
        return Maxarea
