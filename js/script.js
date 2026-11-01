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






    $("#fadeIn").click(function() {
        $(".gallery-images img").fadeIn(600);
    });

    $("#fadeOut").click(function() {
        $(".gallery-images img").fadeOut(600);
    });

    $("#fadeToggle").click(function() {
        $(".gallery-images img").fadeToggle(600);
    });





    $(".interest-title").click(function() {
        $(this).next(".interest-panel").slideToggle(400);
    });

    $("#expandAll").click(function() {
        $(".interest-panel").slideDown(400);
    });

    $("#collapseAll").click(function() {
        $(".interest-panel").slideUp(400);
    });




    $("#addSkill").click(function() {

        let skill = $("#newSkill").val().trim();

        if (skill !== "") {
            $("#skillsList").append("<li>" + skill + "</li>");
            $("#newSkill").val("");
        }

    });

    $("#prependSkill").click(function() {

        let skill = $("#newSkill").val().trim();

        if (skill !== "") {
            $("#skillsList").prepend("<li>" + skill + "</li>");
            $("#newSkill").val("");
        }

    });

    $("#removeSkill").click(function() {

        $("#skillsList li:last").remove();

    });




    $("#changeLink").click(function() {

        let currentLink = $("#githubLink").attr("href");

        if (currentLink === "https://github.com/sasas991") {

            $("#githubLink").attr(
                "href",
                "https://github.com/sasas991/frontend-assignment6"
            );

            $("#githubLink").text("Visit My Repository");

        } else {

            $("#githubLink").attr(
                "href",
                "https://github.com/sasas991"
            );

            $("#githubLink").text("Visit My GitHub");

        }

    });

});
