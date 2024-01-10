function formValidate() {
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = docunment.getElementById("phone").value;
    var error = document.getElementById("error");
    var text = '';

    if(name.length < 3) {
        text = "Please Enter Valid Username";
        error.innerHTML = text;
        return false;
    }

    else if(email.indexOf("@") == -1) {
        text = "Please Enter Valid Email";
        error.innerHTML = text;
        return false;
    }

    else if(isNaN(phone)) {
        text = "Please Enter Valid Phone";
        error.innerHTML = text;
        return false;
    }

    else {
        alert("Done");
        return true;
    }
}