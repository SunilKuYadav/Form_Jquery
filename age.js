let dobData = "2031-01-06";
let dob = new Date(dobData);
var today = new Date();
console.log(today);
var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
console.log(age)