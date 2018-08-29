import $ from 'jquery';
import slick from 'slick-carousel';
import magnificPopup from 'magnific-popup';

//------------- GOOGLE MAP ----------
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.737854, lng: 37.8670967},
    zoom: 16,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false
  });
}
initMap();
//---------- SLIDER ---------------
$(document).ready(function() {
	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  // fade: true,
	  asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  vertical: true,
	  centerMode: true,
    centerPadding: '179px',
	  focusOnSelect: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });
  $('.reviews__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
  //------- FIRST SCREEN SLIDER -------------
  $('.first-screen__nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true,
    vertical: true,
    centerMode: true,
    // fade: true,
    asNavFor: '.first-screen__elem',
  });
  $('.first-screen__elem').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.first-screen__nav',
    dots: false,
    focusOnSelect: true,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 5000
  });

  //--------- ANCHOR --------------------
  $('.nav a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }

  });

  //-------- PRELOADER ------------------
  $(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow');
  });
  //--------------- MODAL -------------------
  $(function() {
    $('.popup-modal').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#modal-form',
    });
    $(document).on('click', '.popup-modal-dismiss', function(e) {
      e.preventDefault();
      $.magnificPopup.close();
    });
  });
  $(function() {
    $('.modal-servises').magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#modal-servises'
    });
    $(document).on('click', '.popup-modal-dismiss', function(e) {
      e.preventDefault();
      $.magnificPopup.close();
    });
  });
  //----- menu ------
  $('.menu__btn, nav').click(function() {
    $('header').toggleClass('active'),
    $('.menu__btn').toggleClass('active');
  });

  //--------- E-mail Ajax Send
  $('form').submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'sendmail.php', //Change
      data: th.serialize()
    }).done(function() {
      alert('Спасибо за заявку!');
      setTimeout(function() {
        // Done Functions
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
});



