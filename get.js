function get(src, path) {
   
    let keys = path.split('.');
    let result = src;
    
  
    for (let i = 0; i < keys.length; i++) {
        
        if (result === undefined || result[keys[i]] === undefined) {
            return undefined;
        }
        
        result = result[keys[i]];
    }
    
    return result;
}
