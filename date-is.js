 function isValid(date){
return  date instanceof Date && !isNaN(date.getTime())

}
function isAfter(date1, date2) {

return date1.getTime()>date2.getTime()


}
function isBefore(date1, date2) {
    return date1.getTime() < date2.getTime()
}
function isFuture(date){
if (!isValid(date)) return false
const now = new Date()
return date.getTime() > now.getTime()

}
function isPast(date) {
if (!isValid(date)) return false
const now = new Date()
return date.getTime() < now.getTime()



}
