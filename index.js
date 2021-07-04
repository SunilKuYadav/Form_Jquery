$(document).ready(()=>{
  $('span').hide();
})
$("#dob").on("change", () => {
setAge();
});
$("#fname").on("change", () => {
checkFname();
});
$("#lname").on("change", () => {
checkLname();
});
$("#phone").on("change", () => {
checkPhone();
});


// Calculate the Age
function calculate_age(dob) { 
  let dobData = new Date(dob);
  var today = new Date();
  return Math.floor((today-dobData) / (365.25 * 24 * 60 * 60 * 1000));
}


// Set Age when DoB enter
function setAge() {
const dateOfBirth = $('#dob').val();
const years = (calculate_age(dateOfBirth));
$('#age').val(years);
if(years < 18 || years < 0) {
    $('#ageError').text('You are under age');
    $('#ageError').show();
} else {
  $('#ageError').hide();
}
}


// Validation of First Name
function checkFname() {
const fname = $("#fname");
const fnameValue = $("#fname").val();
if (fnameValue === "" || fnameValue === null) {
$("#fnameError").text("First name cannot be blank");
} else if (/[^A-Za-z0-9]/.test(fnameValue)) {
$("#fnameError").text("connot contain number or special character");
$("#fnameError").show();
} else {
$("#fnameError").hide();
}
}


// Validation of Last Name
function checkLname() {
const lname = $("#lname");
const lnameValue = $("#lname").val();
if (lnameValue === "" || lnameValue === null) {
$("#lnameError").text("Last name cannot be blank");
} else if (/[^A-Za-z0-9]/.test(lnameValue)) {
$("#lnameError").text("connot contain number or special character");
$("#lnameError").show();
} else {
$("#lnameError").hide();
}
}


// Validation Of Phone Number
function checkPhone() {
const phoneValue = $('#phone').val();
if(phoneValue === '' || phoneValue === null) {
    $('#phoneError').text('phone number can not be empty');
} else if (phoneValue.length > 13 || phoneValue.length < 10 || phoneValue.length === 11 || phoneValue.length === 12) {
  $('#phoneError').text('Please Enter a valid phone number');
    $('#phoneError').show();
} 
else if (phoneValue.length === 13 && !phoneValue.startsWith('+91')) {
  $('#phoneError').text('Please enter valid country code.');
    $('#phoneError').show();
} else {
  $('#phoneError').hide();
}

}