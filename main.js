function formValidate() {
    
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var error = document.getElementById("error");
    var text = '';

    if(name.length < 3 ) {
        text="Please Enter Valid Username";
        error.innerHTML = text;
        return false;
    }

    else if(email.indexOf("@") == -1 || email.length <10 ) {
        text="Please Enter Valid email";
        error.innerHTML = text;
        return false;



    }
    else if (isNaN(phone ) || phone.length <11  )  {
        text="Please Enter Valid phone";
        error.innerHTML = text;
        return false;
    }
    else {
        alert("done");
        return true; 
    }





}