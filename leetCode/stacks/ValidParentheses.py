class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for c in s:
            if c in '({[':
                stack.insert(0, c)
            else:
                if c == ')':
                    removed = stack.pop(0)
                    if removed != '(':
                        return False
                if c == '}':
                    removed = stack.pop(0)
                    if removed != '{':
                        return False
                if c == ']':
                    removed = stack.pop(0)
                    if removed != '[':
                        return False
        print(stack)
        if len(stack) > 0:
            return False
        return True

solver = Solution()
print(solver.isValid("()[]{}"))
print(solver.isValid("(]"))