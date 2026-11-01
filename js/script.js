$(document).ready(function() {

    console.log("jQuery is ready");




    $("h1").css("font-weight", "bold");

    $("#greeting").css("letter-spacing", "2px");

    $(".intro").css("font-weight", "bold");

    $("#changeGreeting").click(function() {
        $("#greeting").text("Welcome to my portfolio!");
    });

    $("#changeHeadline").click(function() {
        $("#headline").html("Future <strong>Android Developer</strong>");
    });

    $("#lightTheme").click(function() {
        $("body").css({
            "background-color": "#f5f5f5",
            "color": "#222"
        });

        $(".navbar").css("background-color", "#ffffff");
    });

    $("#darkTheme").click(function() {
        $("body").css({
            "background-color": "#171717",
            "color": "#ffffff"
        });

        $(".navbar").css("background-color", "#262626");
    });




    $("#hideAbout").click(function() {
        $("#aboutDetails").hide();
    });

    $("#showAbout").click(function() {
        $("#aboutDetails").show();
    });

    $("#toggleAbout").click(function() {
        $("#aboutDetails").toggle();
    });

});
