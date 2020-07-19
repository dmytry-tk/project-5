import "../src/styles/main.sass"
import $ from 'jquery'
import slick from "slick-carousel"

// $(document).ready(function() {
//     $("html").css({"height":$(window).height()+"px"})
//     $(window).resize(function() {
//         $("html").css({"height":$(window).height()+"px", "width":"40px"})
//     });
// });
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

$( ".header-profile .profile-img" ).click(function() {
    $(".main-menu-container").toggleClass("active")
});

$( ".main-menu-container .overflow" ).click(function() {
    $(".main-menu-container").removeClass("active")
});

$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: false,
});

$('.slider-next').on('click', function() {
    $('.slider').slick('slickNext');
});

$('.slider-prev').on('click', function() {
    $('.slider').slick('slickPrev');
});

$('.post-container .slider-post').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: false
});

$('.post-slider-prev').on('click', function() {
    $('.post-container .slider-post').slick('slickNext');
});

$('.post-slider-next').on('click', function() {
    $('.post-container .slider-post').slick('slickPrev');
});
