#solution 1
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        '''
            If it not have the same length, it automatically is not a anagram, so return false

            Create a dict which is going to storage the number of letters of the first word and them
            subtract the counting, by each spot in a next word, if we get any negative number, return false
            after finalizing it, check the keys at dict, if any word different than 0, not anagram

            when checking the second word, find a letter not present in the dict, which should return false
        '''
        if len(s) != len(t):
            return False
        
        if len(s) == 0:
            return True
        
        storage = {}

        for c in s:
            if c not in storage:
                storage[c] = 1
            else:
                storage[c] += 1
            
        for c in t:
            if c not in storage:
                return False
            else:
                storage[c] -= 1
                if storage[c] < 0:
                    return False
        
        for k in storage.keys():
            if storage[k] > 0:
                return False
        return True

#solution 2
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        '''
            If it not have the same length, it automatically is not a anagram, so return false

            We need to check first if the letter of s is present in storage, if so, initialize storage
            We need to make the same check of a letter of c, in not present, initialize

            when checking the second word, find a letter not present in the dict, which should return false
        '''
        if len(s) != len(t):
            return False
        
        if len(s) == 0:
            return True
        
        storage = {}

        for i in range(len(s)):
            s_l = s[i]
            t_l = t[i]

            if s_l not in storage:
                storage[s_l] = 1
            else:
                storage[s_l] += 1

            if t_l not in storage:
                storage[t_l] = -1
            else:
                storage[t_l] -= 1
        
        for k in storage.keys():
            if storage[k] != 0:
                return False
        return True