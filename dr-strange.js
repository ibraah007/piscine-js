function addWeek(date) {

const epoch = new date ("0001-01-01")
const msPerDay = 86400000
const dayssSinceEpoch = Math.floor((dates - epoch)/msPerDay)
const days = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    "secondMonday", "secondTuesday", "secondWednesday", "secondThursday",
    "secondFriday", "secondSaturday", "secondSunday"
]
const index = daysSinceEpoch % 14

return days[index]


}
function timeTravel({ date, hour, minute, second }) {

const newDate = new Date(date)
newDate.setHours(hour)
newDate.setMinutes(mins)
newDate.setSecond(sec)

return newDate




}
