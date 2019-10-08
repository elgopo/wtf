$(function () {
    $(".login_page").addClass("active");
})

function login() {

    let login = $("#login").val();
    let password = $("#password").val();
    let user = localStorage.getItem(login);
    if (user != undefined) {
        if (user == password) {
            location.href = "profile/";
            localStorage.setItem("login_on", login);
        } else {
            alert("Неправильный пароль")
        }
    } else {
        localStorage.setItem(login, password);
        localStorage.setItem("login_on", login);
        location.href = "profile/";
    }
}