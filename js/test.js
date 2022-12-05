
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

// console.log(reverseIt('babble'))

// 