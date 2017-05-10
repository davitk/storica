/*****Open dropdown on hover*****/
$(function(){
    $('.dropdown').hover(function() {
            $(this).addClass('open');
        },
        function() {
            $(this).removeClass('open');
        });
});

/*****Navbar Collapse*****/
$(document).ready(function (){
    $('.nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });
});

/***** On Click navbar toggle change to cross sign*****/
$(document).ready(function (){
    $( ".navbar-toggle" )
        .on( "click", function() {
            $(this).toggleClass( "active" );
            $('.collapse').toggleClass('in')
        });
    $('.nav a').on('click', function() {
        $(".navbar-toggle" ).removeClass("active");
    });
});