function trunc(n) {
    if (n >= 0) {
        return n - (n % 1);
    } else {
        return n - (n % 1);
    }
}

function floor(n) {
    if (n >= 0) {
        return n - (n % 1);
    } else {
        if (n % 1 === 0) {
            return n;
        }
        return n - (n % 1) - 1;
    }
}

function ceil(n) {
    if (n >= 0) {
        if (n % 1 === 0) {
            return n;
        }
        return n - (n % 1) + 1;
    } else {
        return n - (n % 1);
    }
}

function round(n) {
    if (n >= 0) {
        let decimal = n % 1;
        if (decimal >= 0.5) {
            return n - decimal + 1;
        }
        return n - decimal;
    } else {
        let decimal = n % 1;
        if (decimal <= -0.5) {
            return n - decimal - 1;
        }
        return n - decimal;
    }
}
