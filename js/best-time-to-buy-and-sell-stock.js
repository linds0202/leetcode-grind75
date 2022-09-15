// /**
//  * @param {number[]} prices
//  * @return {number}
//  */

 var maxProfit = function(prices) {
    let maxProfit = 0;
    
    let minBuyPrice = Infinity;

    for (let i = 0; i < prices.length; i++) {
        if (minBuyPrice > prices[i]) {
            minBuyPrice = prices[i];
        }

        const currProfit = prices[i] - minBuyPrice;

        if (currProfit > maxProfit) {
            maxProfit = currProfit;
        }
    }

    return maxProfit;
};