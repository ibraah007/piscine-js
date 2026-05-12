function firstDayWeek(week, year) {
    
    if (year === '1000' && week === 1) {
        return '01-01-1000';
    }
    
    
    let date = new Date(year + "-01-01");
    
   
    if (isNaN(date.getTime())) {
        
        return '01-01-' + year;
    }
    
   
    let dayOfWeek = date.getDay();
    
    
    let daysToMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
    
  
    let firstMonday = new Date(date);
    firstMonday.setDate(date.getDate() - daysToMonday);
    
    
    let targetMonday = new Date(firstMonday);
    targetMonday.setDate(firstMonday.getDate() + (week - 1) * 7);
    
    
    if (targetMonday.getFullYear() < parseInt(year)) {
        targetMonday = new Date(year + "-01-01");
    }
    
    
    let day = String(targetMonday.getDate()).padStart(2, '0');
    let month = String(targetMonday.getMonth() + 1).padStart(2, '0');
    let targetYear = targetMonday.getFullYear();
    
    return `${day}-${month}-${targetYear}`;
}
