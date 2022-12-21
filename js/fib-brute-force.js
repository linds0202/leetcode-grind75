const fib = (n) => {
    if (n === 1) return 0
    if (n=== 2) return 1

    let fibs = [0, 1]
    for (let i = 1; i < n; i++) {
        fibs.push(fibs[i - 1] + fibs[i])
    }
    return fibs.pop()
}

console.log(fib(4))