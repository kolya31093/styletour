/**
 * Created by Kolya on 20.01.2017.
 */
$(function(){
    $('.carousel').carousel({
        //interval: false
    });

    $('.search').on('click', function(){
        $('.main-menu .navbar-form').slideToggle();
    });
});

$(window).load(function(){
    var carouselCaptionWidth = $("#carousel-sidebar .active img").width();
    //console.log(carouselCaptionWidth);
    $("#carousel-sidebar img").each(function(){
        $(this).attr('width', carouselCaptionWidth);
    })
    $("#carousel-sidebar .sidebar-carousel-caption").css('max-width', carouselCaptionWidth + 'px');
    $(".carousel-indicators").css('width', carouselCaptionWidth + 'px');
    $(".sidebar .banner").css('width', carouselCaptionWidth + 'px');
});
$('#elastislide').elastislide();