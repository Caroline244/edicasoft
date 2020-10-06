function validateEmail(email) {
    var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
}
function validateTel(tel) {
    var pattern  = /^\d[\d\(\)\ -]{4,14}\d$/;
    return pattern.test(tel);
}
function validate() {
    var email = $("#email").val();
    var name = $("#name").val();
    var tel = $("#tel").val();

    if (validateEmail(email)) {
        $("#email").removeClass("form__input-warning").addClass("form__input-success");

    } else {
        $("#email").addClass("form__input-warning");
    }

    if(name !== '') {
        $("#name").removeClass("form__input-warning").addClass("form__input-success");
    } else {
        $("#name").addClass("form__input-warning");
    }
    console.log(validateTel(tel));
    if (validateTel(tel)) {
        $("#tel").removeClass("form__input-warning").addClass("form__input-success");

    } else {
        $("#tel").addClass("form__input-warning");
    }
    return false;
}

$("#validate").bind("click", validate);