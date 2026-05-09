function split(str, sep) {
    let result = [];
    
    // If separator is empty, split into individual characters
    if (sep === "") {
        for (let i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result;
    }
    
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        // Check if the substring starting at i matches the separator
        let found = true;
        for (let j = 0; j < sep.length; j++) {
            if (str[i + j] !== sep[j]) {
                found = false;
                break;
            }
        }
        
        if (found) {
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

