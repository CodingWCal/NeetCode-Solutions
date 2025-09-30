class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0; //buy day
        let right = 1; //sell day
        
        let minPrice = prices[left];
        let maxProfit = 0;

        while(right < prices.length){
            if (prices[right] < minPrice){
                minPrice = prices[right] 
            } else{
                let profit = prices[right] - minPrice;
                if (profit > maxProfit) {
                maxProfit = profit;
            }
        } 
        right ++;
     } 
        return maxProfit;
    }
} 

//PREP
//Given integer array PRICES
    //prices[i] is price of Stock
    //ith day 

//Return max profit between a single cheapest day to buy stock and a single highest sell date
//EX) 
    //Input: prices = [10,1,5,6,7,1], Output: 6, 7-1 =6
    //Input: prices = [10,8,7,5,2], Output: 0, no profit can be made hence 0


//PSEUDOCODE
// set left pointer = 0 (buy day)
// set right pointer = 1 (sell day)

// set minPrice = prices[left]  (lowest price seen so far)
// set maxProfit = 0  (best profit found so far)

// while right is less than length of prices
    // if prices[right] < minPrice
        // update minPrice = prices[right] (cheaper buy day found)
    // else
        // calculate profit = prices[right] - minPrice
        // if profit > maxProfit
            // update maxProfit = profit
    // move right pointer forward by 1

// return maxProfit
