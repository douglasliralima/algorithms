class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        '''
            Thinking matematically first, to each number in the list the target subctraction by it would result in the value that we need to get the pair
            We should storage the indice which it hapenned, could be the value
            The key should be the value we need to easier find the collision
        '''
        d = {}
        for i in range(len(nums)):
            pair = target - nums[i]
            if pair not in d:
                d[nums[i]] = i
            else:
                return [d[pair], i]