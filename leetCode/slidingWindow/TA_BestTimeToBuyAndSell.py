class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        '''
            If I have a empty list,the profit should return 0

            We should iterate throught the array and
                - When we get a short result, store it
                - if in the future we got a bigger value, store it too
                
                - If we find a new short value, we could replace the last short value
                    - but, if we already found a max value before, we should store the previous profit

                    - if we found a new max value after this, we check with the previous profit and compare if it is bigger
        '''
        if(len(prices) == 0):
            return 0
        
        shortValue = prices[0]
        maxValue = -1
        maxProfit = -1
        for i in range(1, len(prices)):
            value = prices[i]
            if value > shortValue:
                if maxValue == -1:
                    maxValue = value
                    newProfit = maxValue - shortValue
                    if newProfit > maxProfit:
                        maxProfit = newProfit

                else:
                    if value > maxValue:
                        maxValue = value
                        newProfit = maxValue - shortValue
                        if newProfit > maxProfit:
                            maxProfit = newProfit

            if value < shortValue:
                shortValue = value
                maxValue = -1
        if maxProfit == -1:
            return 0
        return maxProfit
                
s = Solution()

print(s.maxProfit([2,1,2,1,0,1,2]))