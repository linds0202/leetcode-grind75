/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = {}
    let majority = ''
    let max = -1
    for (const n of nums) {
        if (hash.hasOwnProperty(n)) {
            hash[n]++
        } else {
            hash[n] = 1
        }
        if (hash[n] > max) {
            max = hash[n]
            majority = n
        }
    }
    return majority
}