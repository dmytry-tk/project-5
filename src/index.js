import "../src/styles/main.sass"
import $ from 'jquery'

$( ".header-profile .profile-img" ).click(function() {
    $(".main-menu-container").toggleClass("active")
});

$( ".main-menu-container .overflow" ).click(function() {
    $(".main-menu-container").removeClass("active")
});