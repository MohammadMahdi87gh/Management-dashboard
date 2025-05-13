$(document).ready(function() {

    // sidebar
    $(".sidebar-item").click(function(e) {
        e.preventDefault();

        const target = $(this).data("target");

        $(".content-section").addClass("d-none");
        $(target).removeClass("d-none");

        $(".sidebar-item").removeClass("active-link");
        $(this).closest(".sidebar-item").addClass("active-link");
    });
    // sidebar

    // humbeger-menu
    $('.has-submenu').on('click', function(e) {
        e.preventDefault();
        if (!$(e.target).closest('ul').hasClass('submenu')) {

            $(this).find('.submenu').toggleClass('d-none');

            var icon = $(this).find('.icon');
            icon.toggleClass('bo-chevron-down bi-chevron-up');
        }
    });
    // humbeger-menu

});