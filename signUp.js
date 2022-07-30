'use strict!'
const emailValidation = /^([\w]+)([\@])([\w]{3,8})\.([\w]{3})$/
const passwordLengthValidation = /^[\w]{5,20}$/
const numberValidation = /^([\w]{11})$/
let eluxMartUser = [
    {
        userFirstName: 'Emmanuel',
        userLastName: 'Oyelowo',
        userEmail: 'emeeylanr04@gmail.com',
        userPhoneNumber: '08152304412',
        userPassWord: '**1234lanr',
        userOrder: [],
        userReciept: [],
        userCart: [],
    }
]

//on th onloads it accept new user to the 
const acceptNewUser = () => {
    if (localStorage.EluxMartUser) {
        eluxMartUser = JSON.parse(localStorage.EluxMartUser)
    }
}
const validation = () => {
    document.getElementById('emailValidation').innerHTML = 'correct'
    if (!emailValidation.test(eMail.value)) {
        document.getElementById('emailValidation').innerHTML = 'Invalid email'
        document.getElementById('emailValidation').style.color = '#ff0000'
        document.querySelector('.inoutboxemail').style.outline = '1px solid #ff0000'

    } else {
        document.getElementById('emailValidation').innerHTML = ''
        document.querySelector('.inoutboxemail').style.outline = '1px solid #4bf14591'
    }
    if (!numberValidation.test(phoneNumber.value)) {
        document.getElementById('phonenumberValidation').style.color = '#ff0000'
        document.getElementById('phonenumberValidation').innerHTML = 'invalid phone number'

        document.querySelector('.inoutboxphonenumber').style.outline = '1px solid #ff0000'
    } else {
        document.querySelector('.inoutboxphonenumber').style.outline = '1px solid #4bf14591'
        document.getElementById('phonenumberValidation').innerHTML = ''

    }
    if (!passwordLengthValidation.test(passWord.value)) {
        document.querySelector('.inoutboxpassword').style.outline = '1px solid #ff0000'
        document.getElementById('passwordValidation').style.color = '#ff0000'
        document.getElementById('passwordValidation').innerHTML = 'pass is too short, min-5'
    } else {
        document.querySelector('.inoutboxpassword').style.outline = '1px solid #4bf14591'
        document.getElementById('passwordValidation').innerHTML = ''
    }


}

let eluxMartUserfirstName = document.getElementById('firstName');
let eluxMartUserlastName = document.getElementById('lastName');
let eluxMartUserEmail = document.getElementById('eMail');
let eluxMartUserPhoneNumber = document.getElementById('phoneNumber');
let eluxMartUserpassword = document.getElementById('passWord')

let validate = false;
const eluxMartUserDetails = () => {
    let user = {
        userFirstName: eluxMartUserfirstName.value,
        userLastName: eluxMartUserlastName.value,
        userEmail: eluxMartUserEmail.value,
        userPhoneNumber: eluxMartUserPhoneNumber.value,
        userPassWord: eluxMartUserpassword.value,
        userOrder: [],
        userReciept: [],
        userCart: [],
    }
    //Email Watch, checks if the eamil has been taken by a user before;
    for (let i = 0; i < eluxMartUser.length; i++) {
        if (eluxMartUser[i].userEmail == eluxMartUserEmail.value) {
            validate = true
        }
    }

    if (validate) {
        document.getElementById('emailValidation').innerHTML = 'Email already taken'
        document.getElementById('emailValidation').style.color = '#ff0000'
        document.querySelector('.inoutboxemail').style.outline = '1px solid #ff0000'

    } else {
        eluxMartUser.push(user)
        localStorage.EluxMartUser = JSON.stringify(eluxMartUser)
        document.getElementById('emailValidation').innerHTML = ''
        document.querySelector('.inoutboxemail').style.outline = '1px solid #4bf14591'

        //turns the input value into empty on if the email is valid
        eluxMartUserfirstName.value = ""
        eluxMartUserlastName.value = ""
        eluxMartUserEmail.value = ""
        eluxMartUserPhoneNumber.value = ""
        eluxMartUserpassword.value = ""

        //Allow user to navigatet to cart if goods have been added before siggning up
        //else it takes them to the index page if they've have added anything to thier cart
        if (localStorage.cartOrder) {
            window.location.href = 'cart.html'
        } else {
            window.location.href = 'index.html'
        }
    }
}
const signUp = () => {

    validation()
    // console.log(30)

    if (eluxMartUserfirstName.value == '' && eluxMartUserlastName.value == '' && eluxMartUserEmail.value == '' && eluxMartUserPhoneNumber.value == '' && eluxMartUserpassword.value == '') {
        console.log('it')
    } else {
        if (emailValidation.test(eMail.value) && numberValidation.test(phoneNumber.value) && passwordLengthValidation.test(passWord.value)) {
            eluxMartUserDetails()
            for (let i = 0; i < eluxMartUser.length; i++) {
                localStorage.userOnline = JSON.stringify(eluxMartUser[i])
            }

        }
    }


}
