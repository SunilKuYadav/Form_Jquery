$(document).ready(() => {
  $("span").hide();
  $('#datepicker').datepicker({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    changeYear: true,
    maxDate: '-216M',
    showAnim:'slideDown',
    onSelect: function(dateText, inst) {
    var time = setAge(new Date(dateText));
    $("#dobError").hide();
    
    }
});
});

// Calling Function on Change values
$("#fname").on("change", () => {
  checkFname();
});
$("#lname").on("change", () => {
  checkLname();
});
$("#phone").on("change", () => {
  checkPhone();
});


// Checking input donot have been enter
$('#submit').click((e) => {
  e.preventDefault();
  $('input').each((index, value) => {
    if($(value).val().trim() === '' || $(value).val().trim() === null) {
      let tag = 'span'+index;
      $('.'+tag).text('This field cannot be empty');
      $('.'+tag).show();
    }
  });
});


// Calculate the Age
function calculate_age(dob) {
  let today = new Date();
  return Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
}

// Set Age when DoB enter
function setAge(dob) {
  const years = calculate_age(dob);
  $("#age").val(years);
  if (years < 18 || years < 0) {
    $("#ageError").text("You are under age");
    $("#ageError").show();
  } else {
    $("#ageError").hide();  }
}

// Validation of First Name
function checkFname() {
  const fname = $("#fname");
  const fnameValue = $("#fname").val();
  if (fnameValue === "" || fnameValue === null) {
    $("#fnameError").text("First name cannot be blank");
  } else if (fnameValue.length > 20 ) {
    $("#fnameError").text("First name cannot be more than 20 letters");
    $("#fnameError").show();
  } else if (/[^A-Za-z]/.test(fnameValue)) {
    $("#fnameError").text("connot contain number or special character");
    $("#fnameError").show();
  } else {
    $("#fnameError").hide();  }
}

// Validation of Last Name
function checkLname() {
  const lname = $("#lname");
  const lnameValue = $("#lname").val();
  if (lnameValue === "" || lnameValue === null) {
    $("#lnameError").text("Last name cannot be blank");
  } else if (lnameValue.length > 20) {
    $("#lnameError").text("Last name cannot be more then 20 letters");
    $("#lnameError").show();
  } else if (/[^A-Za-z]/.test(lnameValue)) {
    $("#lnameError").text("connot contain number or special character");
    $("#lnameError").show();
  } else {
    $("#lnameError").hide();
  }
}

// Validation Of Phone Number
function checkPhone() {
  const phoneValue = $("#phone").val();
  if (phoneValue === "" || phoneValue === null) {
    $("#phoneError").text("phone number can not be empty");
  } else if (
    phoneValue.length > 13 ||
    phoneValue.length < 10 ||
    phoneValue.length === 11 ||
    phoneValue.length === 12
  ) {
    $("#phoneError").text("Please Enter a valid 10 digit phone number");
    $("#phoneError").show();
  } else if (phoneValue.length === 10 && /[^0-9]/.test(phoneValue)) {
    $("#phoneError").text("Please Enter a valid 10 digit phone number");
    $("#phoneError").show();
  } else if (phoneValue.length === 13 && !phoneValue.startsWith("+91")) {
    $("#phoneError").text("Please enter valid country code.");
    $("#phoneError").show();
  } else if (phoneValue.length === 13 && /[^0-9]/.test(phoneValue.slice(2))) {
    $("#phoneError").text("Please enter numbers only.");
    $("#phoneError").show();
  } else {
    $("#phoneError").hide();
  }
}
