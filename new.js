function formValidate() {
    var firstname = document.getElementById("firstname").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = '';


    if (firstname.length <5) {
        text= "Please enter valid firstname";
        error.innerHTML = text;
        return false;
    }
    else if (surname.length <5) {
        text="Please enter valid surname";
        error.innerHTML =text;
        return false;
    }

    else if (email.indexof("@") ==-1 || email.length <10) {
        text ="Please enter valid email";
        error.innerHTML = text;
        return false;
    }
    else if (password.length <8) {
        text = "Please enter valid password";
        error.innerHTML = text;
        return false;
    }
    else {
        alert("done")
        return true;
    }
















}