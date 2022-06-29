//Tooltip Icon-section
var tooltipTriggerList =
    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Toggle cards
$(document).ready(function () {
    $(".card-title").click(function () {
        $(".card-text").toggle();
    });
});

//SmoothScroll
$(document).ready(function () {
    $("a").click(function () {
        var gato = this.hash
        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top
            },
            800
        )
    })
})