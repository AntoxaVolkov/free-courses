/* Task 2 */

function getFibonacci(n) {
    let a = 1, b = 0, c = n, tmp;
    n = Math.abs(n);

    while (n > 0) {
        tmp = a;
        a = a + b;
        b = tmp;
        n --;
    }

    if (c < 0) b = Math.pow(-1, Math.abs(c)+1) * b;
    
    return b;
}

console.log( getFibonacci(process.argv[2]) )