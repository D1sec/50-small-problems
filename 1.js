// The programm shows today's time and date
const date = new Date();
const weekNames = [ "Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Satarday"]
const monthNames = [ "January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let monthDaySpelling = "th";
const monthDayString = date.getDate().toString();

if (monthDayString[monthDayString.length -1] == "1") {
    return monthDaySpelling = "st"
}
if (monthDayString[monthDayString.length -1] == "2") {
    return monthDaySpelling = "nd"
}
if (monthDayString[monthDayString.length -1] == "3") {
    return monthDaySpelling = "rd"
}

console.log(`Today's time is: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`);
console.log(`The day is: ${weekNames[date.getDay()]} on ${monthNames[date.getMonth()]} ${date.getDate()}${monthDaySpelling}`)
console.log(`And the year is: ${date.getFullYear()}`)