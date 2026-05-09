function trunc(n) {
    if (n >= 0) {
        let integer = 0;
        let count = 0;
        while (integer <= n) {
            integer++;
            count++;
        }
        return count - 1;
    } else {
        let absolute = -n;
        let integer = 0;
        let count = 0;
        while (integer <= absolute) {
            integer++;
            count++;
        }
        return -(count - 1);
    }
}

function floor(n) {
    if (n >= 0) {
        let integer = 0;
        let count = 0;
        while (integer <= n) {
            integer++;
            count++;
        }
        return count - 1;
    } else {
        let absolute = -n;
        let integer = 0;
        let count = 0;
        while (integer <= absolute) {
            integer++;
            count++;
        }
        let truncValue = -(count - 1);
        if (n !== truncValue) {
            return truncValue - 1;
        }
        return truncValue;
    }
}

function ceil(n) {
    if (n >= 0) {
        let integer = 0;
        let count = 0;
        while (integer <= n) {
            integer++;
            count++;
        }
        let truncValue = count - 1;
        if (n !== truncValue) {
            return truncValue + 1;
        }
        return truncValue;
    } else {
        let absolute = -n;
        let integer = 0;
        let count = 0;
        while (integer <= absolute) {
            integer++;
            count++;
        }
        return -(count - 1);
    }
}

function round(n) {
    let isNegative = n < 0;
    let absolute = isNegative ? -n : n;
    
    let integer = 0;
    let count = 0;
    while (integer <= absolute) {
        integer++;
        count++;
    }
    let truncValue = count - 1;
    let decimal = absolute - truncValue;
    
    if (isNegative) {
        if (decimal >= 0.5) {
            return -(truncValue + 1);
        } else {
            return -truncValue;
        }
    } else {
        if (decimal >= 0.5) {
            return truncValue + 1;
        } else {
            return truncValue;
        }
    }
}
