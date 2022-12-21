const fib = (n) => {
    let total = 0
    for (let i = n; i > 0; i--) {
        console.log(i)
        total += i
    }

    return total
}

console.log(fib(4))