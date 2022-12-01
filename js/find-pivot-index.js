/**
 * @param {number[]} nums
 * @return {number}
 */
// var pivotIndex = function(nums) {
//     //if length is 1, pivot is 0
//     if(nums.length === 0) return 0
    
//     if(nums.slice(1).reduce((s, n) => s += n, 0) === 0) return 0
    
//     for(let i = 1; i < nums.length; i++) {
//         let sumL = nums.slice(0, i).reduce((s, n) => s += n, 0)
//         let sumR = nums.slice(i + 1).reduce((s, n) => s += n, 0)
        
//         console.log(`sumL: ${sumL}  sumR: ${sumR} i: ${i}`)
        
        
//         if(sumL === sumR) return i
//     }
    
//     return -1
// }
var pivotIndex = function(nums) {
    let sum = nums.reduce((s, n) => s += n, 0)
    
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(leftSum == sum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
}

// var pivotIndex = function(nums) {
//     let sum = nums.reduce((s, n) => s += n, 0)
//     let currsum = 0
    
//     for(let i = 0; i < nums.length; i++){
//         if((sum - nums[i]) / 2 == currsum){
//             return i
//         }
//      currsum += nums[i]
//     }
//     return -1
// }

console.log(pivotIndex([1,7,3,6,5,6]), 3)
console.log(pivotIndex([1,2,3]), -1)