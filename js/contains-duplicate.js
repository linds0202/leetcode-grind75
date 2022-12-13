/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = {}

    for (const n of nums) {
        if (hash.hasOwnProperty(n)) {
            return true
        } else {
            hash[n] = 1
        }
    }
    return false
};