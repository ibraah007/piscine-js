function split(str, sep) {
    let result = [];
    
    // If separator is empty string, split into individual characters
    if (sep === "") {
        for (let i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result;
    }
    
    // Otherwise, split using the separator
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        // Check if current position matches the separator
        if (str.slice(i, i + sep.length) === sep) {
            result.push(temp);
            temp = "";
            i = i + sep.length - 1; // Skip the separator
        } else {
            temp = temp + str[i];
        }
    }
    result.push(temp); 
    return result;
}

function join(arr, sep) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
        if (i !== arr.length - 1) {
            result = result + sep;
        }
    }
    return result;
}
