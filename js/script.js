/*$("p").click(function() {
    //$("p").slideToggle("slow"); // This hides both paragraphs at the same time
    $(this).slideToggle("slow"); // Hides just the clicked paragaph
})*/

$("button").mouseenter(function() {
    $(this).removeClass("makeRed").addClass("makeBlue");
});

$("button").mouseleave(function() {
    $(this).removeClass("makeBlue").addClass("makeRed");
});
