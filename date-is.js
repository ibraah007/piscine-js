function isValid(date) {
    
    if (typeof date === 'number') {
      
        return !isNaN(date);
    }
    
    
    if (date instanceof Date) {
        
        return !isNaN(date.getTime());
    }
    
    
    return false;
}
function isAfter(date1, date2) {
   
    const time1 = date1 instanceof Date ? date1.getTime() : date1;
    
    
    const time2 = date2 instanceof Date ? date2.getTime() : date2;
    
    
    return time1 > time2;
}
function isFuture(date) {
    
    if (!isValid(date)) return false;
    
    
    const now = Date.now();
    
    
    const time = date instanceof Date ? date.getTime() : date;
    
    
    return time > now;
}
function isPast(date) {
    
    if (!isValid(date)) return false;
    
    
    const now = Date.now();
    
    
    const time = date instanceof Date ? date.getTime() : date;
    
    
    return time < now;
}
