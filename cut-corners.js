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
