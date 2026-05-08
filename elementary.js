function multiply(a, b) {
    let result = 0;
    let positiveA = Math.abs(a);
    let positiveB = Math.abs(b);
    
    for (let i = 0; i < positiveB; i++) {
        result = result + positiveA;
    }
    
    if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
        return -result;
    }
    return result;
}

function divide(a, b) {
    if (b === 0) return undefined;
    
    let result = 0;
    let positiveA = Math.abs(a);
    let positiveB = Math.abs(b);
    let remainder = positiveA;
    
    while (remainder >= positiveB) {
        remainder = remainder - positiveB;
        result++;
    }
    
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        return -result;
    }
    return result;
}

function modulo(a, b) {
    if (b === 0) return undefined;
    
    let positiveA = Math.abs(a);
    let positiveB = Math.abs(b);
    let result = positiveA;
    
    while (result >= positiveB) {
        result = result - positiveB;
    }
    
    if (a < 0) {
        return -result;
    }
    return result;
}
