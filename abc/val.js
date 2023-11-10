console.log("hello world");

const btn = document.getElementById('btn');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const mobile = document.getElementById('mobile');
const mail = document.getElementById('mail');
const startDate = document.getElementById('startDate');
const dateForCall = document.getElementById('dateForCall');
const time = document.getElementById('time');
const age = document.getElementById('age');
const comment = document.getElementById('comment');

btn.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});

const setError =  (element, message) => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');
    
    errorDisplay.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');
}

const setSuccess = element => {
    const input = element.parentElement;
    const errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
}

const validateInputs =  () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const mobileValue = mobile.value.trim();
    const mailValue = mail.value.trim();
    const startDateValue = startDate.value.trim();
    const dateForCallValue = dateForCall.value.trim();
    const timeValue = time.value.trim();
    const ageValue = age.value.trim();
    const commentValue = comment.value.trim();

    if(fnameValue == ''){
        setError(fname,'Please enter your first name');
    }else {
        setSuccess(fname);
    }

    if(lnameValue == ''){
        setError(lname,'Please enter your last name');
    }
    else{
        setSuccess(lname);
    }

    if (mobileValue == '') {
        setError(mobile, 'Please enter your mobile number');
    } else {
        setSuccess(mobile)
    }

    if (mailValue == '') {
        setError(mail, 'Please enter your e-mail id');
    } else if(!validateInputs(mailValue)){
        setError(mail, 'Please enter a valid email address');
    }else{
        setSuccess(mail);
    }
    
    if (startDateValue == '') {
        setError(startDate, 'Please enter the date');
    } else {
        setSuccess(startDate)
    }

    if (dateForCallValue == '') {
        setError(dateForCall, 'Please enter the date');
    } else {
        setSuccess(dateForCall)
    }

    if (timeValue == '') {
        setError(time, 'Please enter the time');
    } else {
        setSuccess(time)
    }

    if (ageValue == '') {
        setError(age, 'Please enter your age')
    } else {
        setSuccess(age)
    }

    if (commentValue == '') {
        setError(comment, 'Please enter your current study details')
    } else {
        setSuccess(comment)
    }
}
