let login = document.getElementById("login");
let password = document.getElementById("password");
let button = document.getElementById("button");

login.oninput = function () {
    if (password.value === "" || login.value === "") {
        button.className = "btn waves-effect waves-light disabled";
    } else {
        button.className = "btn waves-effect waves-light";
    }
}

password.oninput = function () {
    if (password.value === "" || login.value === "") {
        button.className = "btn waves-effect waves-light disabled";
    } else {
        button.className = "btn waves-effect waves-light";
    }
}