// /**
//  * @param {string[]} tokens
//  * @return {number}
//  */
 var evalRPN = function(tokens) {
    const stack = []
    const isOperator = token => token === '+' || token === '-' || token === '*' || token === '/'
      for (const token of tokens) {
        if (isOperator(token)) {
          const b = stack.pop()
          const a = stack.pop()
          let result = 0
          switch (token) {
            case '+':
              result = a + b
              break
            case '-':
              result = a - b
              break
            case '/':
              result = a / b
              result = result < 0 ? Math.ceil(result) : Math.floor(a / b) // 注意负数向上取整
              break
            default:
              result = a * b
          }
          stack.push(result)
        } else {
          stack.push(parseInt(token, 10))
    }
  }
  return stack[0]
};