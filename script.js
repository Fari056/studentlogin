const fName = document.querySelector('#firstName');
const mName = document.querySelector('#middelName');
const lName = document.querySelector('#lastName');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const submitBtn = document.querySelector('.submit');
const eMail = document.querySelector('#email');

const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

// auto Email generate 
function generateEmail(){
    const arr = fName.value + lName.value + '@std.uaar.edu.pk';
    eMail.value = arr;
}
eMail.addEventListener('focus' ,function(e){
    generateEmail();
})

// name validation function
function nameValidate()
{
    if (/[^a-zA-Z\-]/.test(fName.value))
{
    alert("first name must be charectar");
}
}

// show error
function showError(input, message) {
    const messageErr = input.parentElement;
    messageErr.className = 'messageErr error';
    const small = messageErr.querySelector('small');
    small.innerText = message;
}
// show success 
function showSuccess(input) {
    const messageSuccess = input.parentElement;
    messageSuccess.className = 'messageSuccess success';

}

// change photo on radio button 
const radio = document.getElementsByName ('select');
const image = document.querySelector('#image');
$(document).ready(function(){
    $("input:radio[name=select]").click(function() {
        var value = $(this).val();
        var image_name;
        if(value == 'male'){
            image_name = "images/male.png";
        }
            else if(value == 'female'){
                image_name = "images/female.png";
            }
         $('#image').attr('src', image_name);
    });
});

// check password matched or not
function checkMached(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Not matched');
    }
}

// password validation
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, ` atleast ${min} charectar`);
    }
    else if (input.value.length > max) {
        showError(input, `atmost ${max} charectar`);
    }
    else
        showSuccess(input)
}

submitBtn.addEventListener('click',function(e){
    e.preventDefault();
    nameValidate();
    checkMached(password, password2);
    checkLength(password, 8, 16)
})
