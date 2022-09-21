// /**
//  * @param {number[][]} mat
//  * @return {number[][]}
//  */

 function findMin(arr) {
    let min = Infinity
    for (const num of arr) {
      min = Math.min(min, num)
    }
    return min
  }
  
  var updateMatrix = function(mat) {
      const [m, n] = [mat.length, mat[0].length]
    const createCell = ([row, col]) => ({ row, col })
    const validCell = ({ row, col }) => 0 <= row && row < m && 0 <= col && col < n
    const dirs = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ].map(createCell)
    const queue = []
  
    // initial state
    for (let row = 0; row < m; row++) {
      for (let col = 0; col < n; col++) {
        if (mat[row][col] === 0) {
          queue.push(createCell([row, col]))
        } else {
          mat[row][col] = Infinity
        }
      }
    }
  
    // bfs traversal
    while (queue.length > 0) {
      const cell = queue.shift()
      for (const delta of dirs) {
        const row = cell.row + delta.row
        const col = cell.col + delta.col
        const adjCell = createCell([row, col]) // adj stands for adjacent
        if (!validCell(adjCell)) continue
  
        // maintain the min distance to nearest 0
        if (mat[adjCell.row][adjCell.col] > mat[cell.row][cell.col] + 1) {
          mat[adjCell.row][adjCell.col] = mat[cell.row][cell.col] + 1
          queue.push(adjCell)
        }
      }
    }
  
    return mat
  };