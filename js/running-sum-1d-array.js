/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let running = [nums[0]]
    for(let i = 1; i < nums.length; i++) {
        running.push(running[i - 1] + nums[i])
    }
    return running
}


// var runningSum = function(nums) {
//     let sum=0
//     for(let i=0;i<nums.length;i++){
//         sum=sum+nums[i]
//         nums[i]=sum
//     }
//     return nums
// }

console.log(runningSum([1,2,3,4]), [1,3,6,10])
console.log(runningSum([1,1,1,1,1]), [1,2,3,4,5])