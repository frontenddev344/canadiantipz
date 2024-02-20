$(document).ready(function () {
    $("#toggle").click(function () {
        $(".navigation").css({ transform: "translateX(0)" });
    });
    $("#closebtn").click(function () {
        $(".navigation").css({ transform: "translateX(-100%)" });
    });
});