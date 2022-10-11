// Tabulation solution
// Create an array where array[i] = least number of coins to make i
var coinChange = function(coins, amount) {
    // Array to hold the number of coins needed to make each amount
    const dp = Array(amount+1).fill(Infinity);
    // To make 0 you would not use any coins
    dp[0] = 0;

    // Fill the array with number of coins to make each i amount
    for(let i = 1; i < dp.length; i++) {
        // Find coins that can make amount i
        for(let coin of coins) {
            // If a coin can make the current amount check if this coin
            // is used in the sequence that uses fewest number of coins 
            // to make this amount
            if(i-coin >= 0) dp[i] = Math.min(dp[i], dp[i-coin]+1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};