function slice(data, start, end) {
    if (end === undefined) {
        end = data.length;
    }
    
    if (start < 0) {
        start = data.length + start;
    }
    
    if (end < 0) {
        end = data.length + end;
    }
    
    if (start < 0) start = 0;
    if (end < 0) end = 0;
    
    if (typeof data === 'string') {
        let result = "";
        for (let i = start; i < end && i < data.length; i++) {
            result = result + data[i];
        }
        return result;
    }
    
    let result = [];
    for (let i = start; i < end && i < data.length; i++) {
        result.push(data[i]);
    }
    return result;
}
