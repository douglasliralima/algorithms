class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        '''
            Okay, lets see
            - Just compare two arrays and if they are both diffent, return false
            - I can see a O(n) approcuh which we iterate throght the first array and populate a dictionary
            - If a value would be added a second time, just return true
        '''
        value_store = {}
        for n in nums:
            if n not in value_store:
                value_store[n] = 1
            else:
                return True
        return False