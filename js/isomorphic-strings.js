/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  var isIsomorphic = function(s, t) {
//     if(s.length !== t.length) return false
    
//     let map = {};
//     for(let i = 0; i < s.length; i++) {
//         let a = s[i]; 
//         let b = t[i];
//         if (!map.hasOwnProperty(a)) {
//             map[a] = b;

//         // check for error in first tuple ("ABB", "XYZ")
//         } else if (map[a] !== b) {
//             return false;
//         }

//         // check for error in second tuple ("ABC", "XYY")
//         for (var key in map) {
//             if (key !== a && b === map[key]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }   

var isIsomorphic = (s, t) => {
    if(s.length !== t.length) return false

    const map = new Map()

    const set = new Set()

    for (let i = 0; i < s.length; i++) {
        let char1 = s.charAt(i)
        let char2 = t.charAt(i)

        if(map.has(char1)) {
            if(map.get(char1) !== char2) return false
        } else {
            if(set.has(char2)) return false

            map.set(char1, char2)
            set.add(char2)
        }
    }
    return true
}

console.log(isIsomorphic('egg', 'add'), true)
console.log(isIsomorphic('foo', 'bar'), false)