var who_is_login = localStorage.getItem("login_on"); 

$(function () {

    if (who_is_login != undefined) {
        $("#login_on").html(who_is_login);       
        $("#login_off").show();
        $(".login_page").hide();
    } else {
        $("#login_on").html("Вход не выполнен");
        $("#login_off").hide();
        $(".login_page").show();
    }
});

function login_off() {
    localStorage.removeItem("login_on");
    location.href = "/";
}