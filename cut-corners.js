function trunc(n) {
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
    if (n >= 0) {
        let result = 0;
        while (result + 1 <= n) {
            result++;
        }
        return result;
    } else {
        let result = -1;
        while (result >= n) {
            if (result - 1 < n) break;
            result--;
        }
        return result;
    }
}

function ceil(n) {
    if (n >= 0) {
        let result = 0;
        while (result < n) {
            if (result + 1 > n) break;
            result++;
        }
        if (result < n) result++;
        return result;
    } else {
        let result = 0;
        while (result - 1 >= n) {
            result--;
        }
        return result;
    }
}

function round(n) {
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
