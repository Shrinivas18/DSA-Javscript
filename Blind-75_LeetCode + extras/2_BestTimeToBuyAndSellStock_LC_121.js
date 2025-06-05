// Sliding Window
// TC - O(n)

var maxProfit = function(prices) {
    let buyDate = 0;
    let sellDate = 1;
    let maxP = 0;

    while (sellDate < prices.length) {
        if (prices[sellDate] > prices[buyDate]) {
            let profit = prices[sellDate] - prices[buyDate];
            maxP = Math.max(maxP, profit);
        } else {
            buyDate = sellDate;
        }
        sellDate++;
    }

    return maxP;
}; 

let prices = [2,1,2,1,0,1,2]
console.log(maxProfit(prices))