import $ from 'jquery';
import slick from 'slick-carousel';

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
    autoplaySpeed: 5000
  });
  $('.reviews__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
  
});




