function trunc(n) {
    // Just remove decimal part
    if (n >= 0) {
        let result = 0;
        while (result + 1 <= n) {
            result++;
        }
        return result;
    } else {
        let result = 0;
        while (result - 1 >= n) {
            result--;
        }
        return result;
    }
}

function floor(n) {
    // Floor goes DOWN (more negative for negative numbers)
    if (n >= 0) {
        // For positive, floor = trunc
        let result = 0;
        while (result + 1 <= n) {
            result++;
        }
        return result;
    } else {
        // For negative, floor goes DOWN one extra if not whole
        let result = 0;
        while (result - 1 >= n) {
            result--;
        }
        // If n is not exactly an integer, subtract 1 more
        if (result > n) {
            return result - 1;
        }
        return result;
    }
}

function ceil(n) {
    // Ceil goes UP (less negative for negative numbers)
    if (n >= 0) {
        // For positive, ceil goes UP if not whole
        let result = 0;
        while (result + 1 <= n) {
            result++;
        }
        if (result < n) {
            return result + 1;
        }
        return result;
    } else {
        // For negative, ceil = trunc (toward zero)
        let result = 0;
        while (result - 1 >= n) {
            result--;
        }
        return result;
    }
}

function round(n) {
    // Round to nearest integer
    if (n >= 0) {
        let integer = trunc(n);
        let decimal = n - integer;
        if (decimal >= 0.5) {
            return integer + 1;
        }
        return integer;
    } else {
        let integer = trunc(n);
        let decimal = n - integer;
        if (decimal <= -0.5) {
            return integer - 1;
        }
        return integer;
    }
}


