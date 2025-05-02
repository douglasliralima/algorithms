class Solution1:
    def isPalindrome(self, s: str) -> bool:
        '''
            to check if a word is a palindrome, first I need to clean the string, which is, removing spaces and any non-alphanumeric and put it all in lower_case 
        '''
        if len(s) == 0:
            return True

        s_clean = ''
        for c in s:
            c_n = ord(c)
            if c_n >= 48 and c_n <= 57:
                s_clean += c
            if c_n >= 65 and c_n <= 90:
                s_clean += c.lower()
            if c_n >= 97 and c_n <= 122:
                s_clean += c
        i = 0
        j = len(s_clean) - 1
        while i <= j:
            if s_clean[i] == s_clean[j]:
                i += 1
                j -= 1
            else:
                return False
        return True

#Quickest
class Solution:
    def isPalindrome(self, s: str) -> bool:
        '''
            to check if a word is a palindrome, first I need to clean the string, which is, removing spaces and any non-alphanumeric and put it all in lower_case 
        '''
        if len(s) == 0:
            return True

        i = 0
        j = len(s) - 1
        while i <= j:
            i_alpha = s[i].isalnum()
            j_alpha = s[j].isalnum()
            if i_alpha and j_alpha:
                i_lower = s[i].lower()
                j_lower = s[j].lower()
                if i_lower == j_lower:
                    i += 1
                    j -= 1
                else:
                    return False
            elif not i_alpha:
                i += 1
            elif not j_alpha:
                j -= 1
            else:
                i += 1
                j -= 1
        return True


solver = Solution()

print(solver.isPalindrome("0P"))
# print(solver.isPalindrome("amar a Xmarama"))