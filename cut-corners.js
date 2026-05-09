function trunc(n) {
    if (n > 0) {
        let i = 0;
        while (i <= n) {
            i++;
        }
        return i - 1;
    } else if (n < 0) {
        let i = -1;
        while (i >= n) {
            i--;
        }
        return i + 1;
    }
    return 0;
}

function floor(n) {
    if (n >= 0) {
        let i = 0;
        while (i <= n) {
            i++;
        }
        return i - 1;
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
        while (i >= n) {
            i--;
        }
        return i + 1;
    }
}

function round(n) {
    if (n >= 0) {
        let integer = 0;
        while (integer <= n) {
            integer++;
        }
        integer--;
        let decimal = n - integer;
        if (decimal >= 0.5) {
            return integer + 1;
        }
        return integer;
    } else {
        let integer = 0;
        while (integer >= n) {
            integer--;
        }
        integer++;
        let decimal = n - integer;
        if (decimal <= -0.5) {
            return integer - 1;
        }
        return integer;
    }
}
