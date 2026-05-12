function firstDayWeek(week, year) {

    let date = new Date(year + "-01-01");
    let dayOfWeek = date.getDay();
    let daysToMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
    let firstMonday = new Date(date);
    firstMonday.setDate(date.getDate() - daysToMonday);
    
}
