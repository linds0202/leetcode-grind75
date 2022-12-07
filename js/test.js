
// //Day1

// const panic = (s) => {
//     let sentence = s.split(' ')

//     if(sentence.length === 1) return s.toUpperCase() + '!'
        
//     return sentence.map(w => w.toUpperCase()).join(' 😱 ') + '!'
// }

// // Test your function
// console.log(panic("I'm almost out of coffee")); 
// console.log(panic("winter is coming"))


//Day 2
//Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

// const reverseIt = s => {
//     let reversed = []
//     for (let i = s.length - 1; i >= 0; i--) {
//         reversed.push(s[i])
//     }
//     return reversed.join('')
// }

//or using for . . . of
// const reverseIt = string => {
//     let result = "";
//     for (let character of string) result = character + result;
//     return result;
// }

//or using reduce

//const reverseIt = string =>
// string.split("").reduce((result, character) => character + result);


// console.log(reverseIt('babble'))

// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.What if the string is empty? Then the result should be empty object literal, {}.

// const countChars = (s) => {
//     let chars = {}
//     for(let el of s) {
//         chars.hasOwnProperty(el) ? chars[el] ++ : chars[el] = 1
//     }
//     return chars
// }
// console.log(countChars('babble'))

//DAY 3
const returnMost = (s) => {
    let hash = {}
    let max = 0

    for (const char of s) {
        if (hash.hasOwnProperty(char)) {
            hash[char]++
            if(hash[char] > max) {
                max = hash[char]
            }
        } else {
            hash[char] = 1
            if(hash[char] > max) {
                max = hash[char]
            }
        }
    }

    return max
}   

console.log(returnMost('ahhdskjsjjjj'))