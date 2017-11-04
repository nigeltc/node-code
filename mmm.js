exports.add = add;
exports.mul = mul;
exports.fact = fact;
exports.now = Date.now();

function add(n1, n2) {
    return parseInt(n1, 10) + parseInt(n2, 10);
}

function mul(n1, n2) {
    return parseInt(n1, 10) * parseInt(n2, 10);
}

function fact(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * fact(n-1);
    }
}
