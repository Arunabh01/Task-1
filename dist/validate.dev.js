"use strict";

var btn = document.getElementById('btn');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var mobile = document.getElementById('mobile');
var mail = document.getElementById('mail');
var startDate = document.getElementById('startDate');
var dateForCall = document.getElementById('dateForCall');
var time = document.getElementById('time');
var age = document.getElementById('age');
var comment = document.getElementById('comment');
btn.addEventListener('click', function (e) {
  e.preventDefault();
  validateInputs();
});

var setError = function setError(element, message) {
  var input = element.parentElement;
  var errorDisplay = input.querySelector('.error');
  errorDisplay.innerText = message;
  input.classList.add('error');
  input.classList.remove('success');
};

var setSuccess = function setSuccess(element) {
  var input = element.parentElement;
  var errorDisplay = input.querySelector('.error');
  errorDisplay.innerText = '';
  input.classList.add('success');
  input.classList.remove('error');
};

var validateInputs = function validateInputs() {
  var fnameValue = fname.value.trim();
  var lnameValue = lname.value.trim();
  var mobileValue = mobile.value.trim();
  var mailValue = mail.value.trim();
  var startDateValue = startDate.value.trim();
  var dateForCallValue = dateForCall.value.trim();
  var timeValue = time.value.trim();
  var ageValue = age.value.trim();
  var commentValue = comment.value.trim();

  if (fnameValue == '') {
    setError(fname, 'Please enter your first name');
  } else {
    setSuccess(fname);
  }

  if (lnameValue == '') {
    setError(lname, 'Please enter your last name');
  } else {
    setSuccess(lname);
  }

  if (mobileValue == '') {
    setError(mobile, 'Please enter your mobile number');
  } else {
    setSuccess(mobile);
  }

  if (mailValue == '') {
    setError(mail, 'Please enter your e-mail id');
  } else if (!validateInputs(mailValue)) {
    setError(mail, 'Please enter a valid email address');
  } else {
    setSuccess(mail);
  }

  if (startDateValue == '') {
    setError(startDate, 'Please enter the date');
  } else {
    setSuccess(startDate);
  }

  if (dateForCallValue == '') {
    setError(dateForCall, 'Please enter the date');
  } else {
    setSuccess(dateForCall);
  }

  if (timeValue == '') {
    setError(time, 'Please enter the time');
  } else {
    setSuccess(time);
  }

  if (ageValue == '') {
    setError(age, 'Please enter your age');
  } else {
    setSuccess(age);
  }

  if (commentValue == '') {
    setError(comment, 'Please enter your current study details');
  } else {
    setSuccess(comment);
  }
};