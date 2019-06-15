/*
var myPastDate = new Date(1545, 11, 2, 10, 30, 15);
var myFutureDate = new Date(2545, 11, 2, 10, 30, 15);

console.log(myPastDate);
console.log(myFutureDate);
*/

var birthday = new Date(1999, 3, 23, 14, 23);
var birthday2 = new Date(1999, 3, 23, 14, 23);

console.log(birthday.getMonth());
console.log(bithday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if(birthday.getTime() == birthday2.getTime()){

    console.log("birthday are equal");
} else{

    console.log("birthdays are not equal");
}