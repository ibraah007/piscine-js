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
