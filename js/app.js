$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#return-to-top').fadeIn();
    } else {
        $('#return-to-top').fadeOut();
    }
});
$(document).ready(function () {
    $("#return-to-top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

});

new CircleType(document.getElementById('curved-text-1'))
    .radius(185);

new CircleType(document.getElementById('curved-text-2'))
    .radius(185);

new CircleType(document.getElementById('curved-text-3'))
    .radius(185);

new CircleType(document.getElementById('curved-text-4'))
    .radius(185);

new CircleType(document.getElementById('curved-text-5'))
    .radius(185);

new CircleType(document.getElementById('curved-text-6'))
    .radius(185);