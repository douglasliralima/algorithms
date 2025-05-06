class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        tail = dummy
        while list1 or list2:
            if list1 is None and list2:
                tail.next = list2
                break
            elif list2 is None and list1:
                tail.next = list1
                break
            elif list1.val <= list2.val:
                tail.next = list1
                list1 = list1.next
            elif list1.val >= list2.val:
                tail.next = list2
                list2 = list2.next
            tail = tail.next
        return dummy.next
    

#My original bad solution
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        head, merged = None, None
        if list1 is None and list2:
            return list2
        elif list2 is None and list1:
            return list1
        elif list1 and list2 and list1.val <= list2.val:
            merged, head =  list1, list1
            list1 = list1.next
        elif list1 and list2 and list1.val >= list2.val:
            merged, head = list2, list2
            list2 = list2.next
        while list1 or list2:
            if list1 is None and list2:
                merged.next = list2
                break
            elif list2 is None and list1:
                merged.next = list1
                break
            elif list1.val <= list2.val:
                merged.next = list1
                list1 = list1.next
            elif list1.val >= list2.val:
                merged.next = list2
                list2 = list2.next
            merged = merged.next
        return head