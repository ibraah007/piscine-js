function trunc(n) {
    if (n >= 0) {
        let i = 0;
        while (i + 1 <= n) {
            i++;
        }
        return i;
    } else {
        let i = 0;
        while (i - 1 >= n) {
            i--;
        }
        return i;
    }
}

function floor(n) {
    if (n >= 0) {
        let i = 0;
        while (i + 1 <= n) {
            i++;
        }
        return i;
    } else {
        let i = -1;
        while (i > n) {
            i--;
        }
        return i;
    }
}

function ceil(n) {
    if (n >= 0) {
        let i = 0;
        while (i < n) {
            i++;
        }
        return i;
    } else {
        let i = -1;
        while (i + 1 > n) {
            i--;
        }
        return i + 1;
    }
}

function round(n) {
    if (n >= 0) {
        let i = 0;
        while (i + 1 <= n) {
            i++;
        }
        let decimal = n - i;
        if (decimal >= 0.5) {
            return i + 1;
        }
        return i;
    } else {
        let i = 0;
        while (i - 1 >= n) {
            i--;
        }
        let decimal = n - i;
        if (decimal <= -0.5) {
            return i - 1;
        }
        return i;
    }
}
