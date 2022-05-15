//SignUp script
//import * as helper from "../js/name.js";    

//sign up variables 
var firstName, lastName;
var email;
var password;
var birthDate;
var userAge;
var gender;
var cpNumber;

//sign up Boolean
var okFirstName, okLastName;
var okEmail;
var okPassword;
var okBirthDate;
var okGender;

//login variables
var username;
var userPassword;
var isLoggedIn = false;

//get body id
var page = document.body.id;

regetData();

if(page == "signup1") {
    document.getElementById("nextButton2").onclick = function(){        
        firstName = getFirstName();
        lastName = getLastName();
        email = getEmail();
        password = getPassword();

        localStorage.setItem("firstName2", firstName);
        localStorage.setItem("lastName2", lastName);
        localStorage.setItem("email2", email);
        localStorage.setItem("password2", password);
        
        canGoToNextPage();
    }

} else if(page == "signup2") {

    document.getElementById("doneButton").onclick = function(){
        cpNumber = getCpNumber();
        if(gender == "Male" || gender == "Female") {
            alert("Successfully Signed Up!!!")
            document.getElementById('doneButton2').href = "login.html";
        } else {
            alert("Please select a gender");
        }
        localStorage.setItem("birthDate2", birthDate);
        localStorage.setItem("gender2", gender);
        localStorage.setItem("cpNumber2", cpNumber);
    }

} else if(page == "login1") {
    document.getElementById("loginButton").onclick = function() {
        username = getUserName();
        userPassword = getUserPassword();
        login(ifCanLogin());
    }
} else if(page == "mainBody") {
    preventToOpen();
    
    document.getElementById("logoutUser").onclick = function() {
        var logOutKey = document.getElementById('logoutUserFunction');
        isLoggedIn = false;
        localStorage.setItem("isLoggedIn2", isLoggedIn);
        logOutKey.href = "LoginSignUp/SignUp/login.html";
    }

    usersNameToPrint();
} else if(page == "subBody") {
    preventToOpen();

    document.getElementById("logoutUser").onclick = function() {
        var logOutKey = document.getElementById('logoutUserFunction');
        isLoggedIn = false;
        localStorage.setItem("isLoggedIn2", isLoggedIn);
        logOutKey.href = "LoginSignUp/SignUp/login.html";
    }

    usersNameToPrint();
}

//reget data
function regetData() {
    firstName = localStorage.getItem("firstName2");
    lastName = localStorage.getItem("lastName2");
    email = localStorage.getItem("email2");
    password = localStorage.getItem("password2");
    birthDate = localStorage.getItem("birthDate2");
    gender = localStorage.getItem("gender2");
    cpNumber = localStorage.getItem("cpNumber2");
    isLoggedIn = localStorage.getItem("isLoggedIn2");
    userAge = localStorage.getItem("userAge2");
}


//Sign up functions
function getFirstName() {
    var getNameVar = document.getElementById("firstName").value;
    if(getNameVar.length < 2) {
        alert("Invalid first name");
        okFirstName = false;
        return false;
    } else {
        okFirstName = true;
        return getNameVar;
    }
}

function getLastName() {
    var getNameVar = document.getElementById("lastName").value;
    if(getNameVar.length < 2) {
        alert("Invalid last name");
        okLastName = false;
    } else {
        okLastName = true;
    }
    return getNameVar;
}

function getEmail() {
    var userEmail = document.getElementById("emailOrNumber").value;
    var forAt, forDot;

    console.log();

    for(i = 0; i < userEmail.length; i++) {
        if(userEmail.charAt(i) == '@') {
            forAt = true;
            console.log(forAt);
        }
        if(userEmail.charAt(i) == '.') {
            forDot = true;
            console.log(forDot);
        }
    }

    if(forAt == true && forDot == true) {
        okEmail = true;
    } else {
        okEmail = false;
    }
    return userEmail;
}

//also validate email
function getPassword() {
    var pass1, pass2;
    pass1 = document.getElementById("password1").value;
    pass2 = document.getElementById("password2").value;

    if(pass1 == pass2) {
        if(checkPassStrength(pass1) == true) {
            okPassword = true;
            if(okFirstName == true && okLastName == true && okEmail == true && okPassword == true) {
                document.getElementById("hiddenOne").removeAttribute("required");
            }
            return pass1;
        } else {
            alert("password must atlest contain 1 small, big and numiric character");
        }
    } else {
        alert("Password don't match, Please re-enter");
        okPassword = false;
        return false;
    }
}

function checkPassStrength(pass1) {
    var hasSmallLetter, hasBigLetter, hasNumiric;
    //pass1 = Password123
    for(i = 0; i < pass1.length; i++) {
        if(/[a-z]/.test(pass1.charAt(i))) 
            hasSmallLetter = true;

        if(/[A-Z]/.test(pass1.charAt(i))) 
            hasBigLetter = true;

        if(/[0-9]/.test(pass1.charAt(i))) 
            hasNumiric = true;
    }


    if((hasBigLetter == true || hasBigLetter == 'true') 
    && (hasSmallLetter == true || hasSmallLetter == 'true') 
    && (hasNumiric == true || hasNumiric == 'true')) {
        return true;
    } else {
        return false;
    }
}

function canGoToNextPage() {

    if(okFirstName == true && okLastName == true && okEmail == true && okPassword == true) {
        var frm = document.getElementById('form1') || null;
        if (frm) {
            frm.action = 'signup2.html';
        }
    }    
}

function getBirthDate(){
    return document.getElementById("birtdayDate").value;
}

function setAge() {
    document.getElementById("ageValue").value = getAge();
}

function getAge() {
    birthDate = getBirthDate();

    var bd = new Date(birthDate);
    var date = bd.getDate();
    var month = bd.getMonth();
    var year = bd.getFullYear();

    var today = new Date();
    var dateToday = today.getDate();
    var monthToday = today.getMonth() + 1;
    var yearToday = today.getFullYear();
    
    var age = -1;
    for(i = year; i < yearToday; i++, age++) {
        //console.log(age);
    }
    if(month <= monthToday && date <= dateToday) {
        age += 1;
    }
    userAge = age;
    localStorage.setItem("userAge2", userAge);
    return age;
}

function genderSetToMale() {
    gender = "Male";
}

function genderSetToFemale() {
    gender = "Female";
}

function getNumber(e) {
    var x = e.which || e.keycode;
    if((x >= 48 && x <= 57)) {
        return true;
    } else {
        return false;
    }
}

function getCpNumber() {
    return "0" + document.getElementById("numberInput").value;
}


//Login functions
function getUserName() {
    return document.getElementById("emailOrNumberLogin").value;
}

function getUserPassword() {
    return document.getElementById("passwordLogin").value;
}

function ifCanLogin() {

    if((username == email && userPassword == password) || (username == cpNumber && userPassword == password)) {
        return true;
    } else {
        return false;
    }
}

function login(tryLogin) {
    if(tryLogin == false) {
        alert("username and password dont match");
    } else if(tryLogin == true) {
        isLoggedIn = true;
        localStorage.setItem("isLoggedIn2", isLoggedIn);
        document.getElementById('loginLink').href = "/shopee.html";
    }
}

function usersNameToPrint() {
    document.getElementById("usersNameToSee").innerHTML = firstName;
}

function preventToOpen() {
    if(isLoggedIn == 'false' || isLoggedIn == null) {
        location.replace("/LoginSignUp/SignUp/login.html");
    }
}

function checkPassReqirements() {
    var pass = document.getElementById("password1").value;
    if(checkPassStrength(pass)) {
        document.getElementById("passwordCheckbox").checked = true;
    } else {
        document.getElementById("passwordCheckbox").checked = false;
    }
}
