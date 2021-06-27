function validate() {
    var uname = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (uname == "parul" && password == "gupta") {
        return true;
    }
    else {
        alert("Wrong id or Password");
        return false;
    }
}