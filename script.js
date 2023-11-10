function validateForm() {
            
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var mobile  = document.getElementById('mobile').value;
    var mail = document.getElementById('mail').value;
    var startDate = document.getElementById('startDate').value;
    var dateForCall = document.getElementById('dateForCall').value;
    var time = document.getElementById('time').value;
    var age = document.getElementById('age').value;
    var comment = document.getElementById('comment').value;
    var btn = document.getElementById('btn').value;
        
    document.getElementById('fnameError').innerHTML = '';
    document.getElementById('lnameError').innerHTML = '';
    document.getElementById('mob_numError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('startDateError').innerHTML = '';
    document.getElementById('callDateError').innerHTML = '';
    document.getElementById('timeError').innerHTML = '';
    document.getElementById('ageError').innerHTML = '';
    document.getElementById('commentError').innerHTML = '';

           
    if (fname === '') {
        document.getElementById('fnameError').innerHTML = 'Frist name is required';
        return false;
    }

    if (lname === '') {
        document.getElementById('lnameError').innerHTML = 'Last name is required';
        return false;
    }

    if (mobile === '') {
        document.getElementById('mob_numError').innerHTML = 'Please enter your phone number';
        return false;
    }

    if (mail === '') {
        document.getElementById('emailError').innerHTML = 'Last name is required';
        return false;
    }

    if (startDate === '') {
        document.getElementById('fnameError').innerHTML = 'Frist name is required';
        return false;
    }

    if (dateForCall === '') {
        document.getElementById('lnameError').innerHTML = 'Last name is required';
        return false;
    }

    if (time === '') {
        document.getElementById('mob_numError').innerHTML = 'Please enter your phone number';
        return false;
    }

    if (age === '') {
        document.getElementById('lnameError').innerHTML = 'Last name is required';
        return false;
    }

    if (comment === '') {
        document.getElementById('mob_numError').innerHTML = 'Please enter your phone number';
        return false;
    }


    // Form is valid
    alert('Form submitted successfully!');
        return true;
}

