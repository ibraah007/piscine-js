 function isValid(date){
return  dateinstanceof Date && !isNan(date.getTime())

}
function isAfter(date1, date2) {

return date1>date2


}
function isBefore(date1, date2) {
    return date1. < date2.
}
function isFuture(date){
if (!isValid(date)) return false
const now = newDate()
return date.getTime() > now.getTime()

}
function isPast(date) {
if (!isValid(date)) return false
const now = newDate()
return date.getTime() < nowgetTime()



}
