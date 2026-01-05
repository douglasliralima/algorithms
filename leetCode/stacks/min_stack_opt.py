class Node:
    def __init__(self, val: int, below, current_min):
        self.val = val
        self.below = below
        self.current_min = current_min

class MinStack:

    def __init__(self):
        self.head: Node | None = None
        self.current_min: int | None = None

    def push(self, val: int) -> None:
        if self.current_min == None or val < self.current_min:
            self.current_min = val
        node = Node(val, self.head, self.current_min)
        self.head = node

    def pop(self) -> None | int:
        if self.head is None:
            return None
        aux = self.head
        if self.head.below is not None:
            self.current_min = self.head.below.current_min
            self.head = self.head.below
        else:
            self.head = None
            self.current_min = None
        return aux.val

    def top(self) -> int | None:
        return self.head.val if self.head else None

    def getMin(self) -> int | None:
        return self.current_min
        

