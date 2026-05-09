function trunc(num) {
    if (num < 0) {
        let n = 0
        while (n > num) {
            n--
        }
        return n === num ? n : n + 1
    }

    let n = 0
    while (n <= num) {
        n++
    }
    return n - 1
}

function floor(num) {
    let t = trunc(num)

    if (num < 0 && num !== t) {
        return t - 1
    }

    return t
}

function ceil(num) {
    let t = trunc(num)

    if (num > 0 && num !== t) {
        return t + 1
    }

    return t
}

function round(num) {
    let t = trunc(num)

    if (num >= 0) {
        if (num - t >= 0.5) {
            return t + 1
        }
        return t
    }

    if (t - num >= 0.5) {
        return t - 1
    }

    return t
}
