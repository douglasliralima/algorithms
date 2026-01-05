class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        min_val = self.getMin()
        if min_val == None or min_val > val:
            min_val = val
        self.min_stack.append(min_val)


    def pop(self) -> None:
        aux = self.stack.pop()
        self.min_stack.pop()
        return aux

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int | None:
        return self.min_stack[-1] if self.min_stack else None
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()