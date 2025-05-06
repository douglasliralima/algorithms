#Iteratible
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        '''
            Lets try to understand this iterable first, the easy approuch would  be
            One way could be always get the previous value and store the next value
            and them, to each iteration, put the current, point to the previous one
            and store the next, going all the way, until hext.next is false
        '''
        prev = None
        curr = head
        while curr is not None:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        return prev

#Recursive
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def reverse(cur, prev):
            if cur is None:
                return prev
            else:
                # save new next node
                next = cur.next
                #reverse
                cur.next = prev
                #reverse rest of the list
                return reverse(next, cur)
        return reverse(head, None)