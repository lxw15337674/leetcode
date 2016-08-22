def median(list):
    mid = len(list) // 2
    if len(list) % 2 == 0:
        a = (list[mid] + list[mid - 1]) / 2.0
    else:
        a = list[mid]
    return a


class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        nums1.extend(nums2)
        nums1.sort()
        return median(nums1)