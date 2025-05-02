class Solution:
    def search(self, nums: list[int], target: int) -> int:
        '''
        if empty array, probably return -1

        make a pointer for left starting as 0, right, starting as len, and middle
        if target > the actual right return -1
        if target < thas actual left value -1
        
        We should take the half value of the array, if target is greater than
            search the right
            if target is lesser, search the left
        '''
        if len(nums) == 0:
            return -1
        
        left = 0
        right = len(nums) - 1
        if target > nums[right]:
            return -1
        if target < nums[left]:
            return -1
        
        middle = int(len(nums) / 2)
        # print(middle, left, right)
        while left != right:
            if target == nums[middle]:
                return middle
            if target > nums[middle]:
                left = middle +1
            else:
                right = middle
            middle = int((right - left )/ 2) + left

print(Solution().search([-1,0,3,5,9,12], 9))