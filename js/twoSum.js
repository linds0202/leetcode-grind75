
var twoSum = function(nums, target) {
    const pairs = []
    const store = []
  
    for (let part1 of nums) {
        const part2 = target - part1
      
        if (store.indexOf(part2) !== -1) {
            pairs.push([part1, part2])
        }
        store.push(part1)
    }
  
    return pairs
}

console.log(twoSum([1, 2, 2, 3, 4], 4))