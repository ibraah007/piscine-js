function split(str, sep) {
    let result = [];
    
    if (sep === "") {
        for (let i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result;
    }
    
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === sep) {
            result.push(temp);
            temp = "";
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
