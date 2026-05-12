function isValid(date) {
    
    if (typeof date === 'number') {
      
        return !isNaN(date);
    }
    
    
    if (date instanceof Date) {
        
        return !isNaN(date.getTime());
    }
    
    
    return false;
}
