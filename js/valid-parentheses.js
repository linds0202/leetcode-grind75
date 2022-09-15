// /**
//  * @param {string} s
//  * @return {boolean}
// **/
 var isValid = function(s) {
    //odd length means uneven pairs
    if (s.length % 2 !== 0) return false;

    const stack = [];
    //possibilities
    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ]);

    for(let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            stack.push(map.get(s[i]));
        } else if (s[i] !== stack.pop()) {
            return false;
        }
    }

    return (stack.length === 0);
};

console.log(isValid("()[]{}"));
