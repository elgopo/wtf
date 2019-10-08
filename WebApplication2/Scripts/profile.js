$(function () {
    $(".profile_page").addClass("active");

    if (who_is_login != undefined) {
        let profile_name = localStorage.getItem(who_is_login);
        if (profile_name != undefined) {
            $("#login").html(who_is_login);
            $("#password").html(profile_name);
        }
    } else {
        location.href = "Login";
    }

})