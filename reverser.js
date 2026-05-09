function reverse(data) {
    if (typeof data === 'string') {
        let result = "";
        for (let char of data) {
            result = char + result;
        }
        return result;
    }
    
    let result = [];
    for (let item of data) {
        result.unshift(item);
    }
    return result;
}
