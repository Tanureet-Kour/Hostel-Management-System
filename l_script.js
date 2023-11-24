// Validation Code for inputs
// window.alert("inside javascript:");
// console.log("inside javascript");

function validate_LForm() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    if (email.length < 9) {
        console.log("email2");
        alert("Email characters less than 9");
        return false;
    }
    if (password.length < 9) {
        console.log("pass2");
        alert("Password characters less than 9");
        return false;
    }
} 