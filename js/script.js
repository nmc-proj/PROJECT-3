$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});
$('.owl-carousel').owlCarousel({
  rewind:true,
  loop:true,
  margin:-10,
  nav:true,
  items:3,
  nav:true,
  autoplay:false,
  merge:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  navSpeed:500,
  center:true,/* 
  navContainer:'.arrow_box', */
})