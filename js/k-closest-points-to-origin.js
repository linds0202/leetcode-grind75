// /**
//  * @param {number[][]} points
//  * @param {number} k
//  * @return {number[][]}
//  */
 var kClosest = function(points, k) {
    const sorted = points.sort(
        ([a, b], [c, d]) => Math.sqrt(a * a + b * b) - Math.sqrt(c * c + d * d),
      )
      return sorted.slice(0, k)
};