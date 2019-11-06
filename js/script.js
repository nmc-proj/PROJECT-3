$(document).ready(function(){

  
  var owl_pic = $('#owl_pic');
  owl_pic.owlCarousel({
  rewind:true,
  loop:true,
  margin:-100,
  nav:false,
  items:3,
  autoplay:false,
  merge:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  navSpeed:500,
  center:true,
  dots: true,
  animateOut: 'zoomOut',
  animateIn: 'flipInY',
})

//поиск точек

const dotNicole = document.querySelector(".dot-nicole");
const dotNicolas = document.querySelector(".dot-nicolas");
const dotBrad = document.querySelector(".dot-brad");
const dotRyan = document.querySelector(".dot-ryan");

//поиск текстов

const textNicole = document.querySelector(".slider_text-nicole");
const textNicolas = document.querySelector(".slider_text-nicolas");
const textBrad = document.querySelector(".slider_text-brad");
const textRyan = document.querySelector(".slider_text-ryan");

//поиск картинок

const picNicole = document.querySelector(".slider_pic-nicole");
const picNicolas = document.querySelector(".slider_pic-nicolas");
const picBrad = document.querySelector(".slider_pic-brad");
const picRyan = document.querySelector(".slider_pic-ryan");

//эвент лисенеры

dotNicole.addEventListener('click', changeToNicole);
dotNicolas.addEventListener('click', changeToNicolas);
dotBrad.addEventListener('click', changeToBrad);
dotRyan.addEventListener('click', changeToRyan);

//смена классов по клику на точки

function changeToNicole () {
  
  //text

  /* 
  textNicole.style.display = 'block';
  textNicolas.style.display = 'none';
  textBrad.style.display = 'none';
  textRyan.style.display = 'none'; */
  
  $('.slider_text-nicole').addClass('active-text');
  $('.slider_text-nicolas').removeClass('active-text');
  $('.slider_text-brad').removeClass('active-text');
  $('.slider_text-ryan').removeClass('active-text');


  //pic

  $('.slider_pic-nicole').addClass('center');
  $('.slider_pic-nicole').removeClass('active');
  $('.slider_pic-nicole').removeClass('active_left');
  $('.slider_pic-nicole').removeClass('active_right');

  $('.slider_pic-nicolas').removeClass('center');
  $('.slider_pic-nicolas').addClass('active');
  $('.slider_pic-nicolas').removeClass('active_left');
  $('.slider_pic-nicolas').addClass('active_right');

  $('.slider_pic-brad').removeClass('center');
  $('.slider_pic-brad').removeClass('active');
  $('.slider_pic-brad').removeClass('active_left');
  $('.slider_pic-brad').removeClass('active_right');

  $('.slider_pic-ryan').removeClass('center');
  $('.slider_pic-ryan').addClass('active');
  $('.slider_pic-ryan').addClass('active_left');
  $('.slider_pic-ryan').removeClass('active_right');

}
function changeToNicolas () {/* 
  textNicole.style.display = 'none';
  textNicolas.style.display = 'block';
  textBrad.style.display = 'none';
  textRyan.style.display = 'none'; */
  
  $('.slider_text-nicole').removeClass('active-text');
  $('.slider_text-nicolas').addClass('active-text');
  $('.slider_text-brad').removeClass('active-text');
  $('.slider_text-ryan').removeClass('active-text');


  //pic

  $('.slider_pic-nicole').removeClass('center');
  $('.slider_pic-nicole').addClass('active');
  $('.slider_pic-nicole').addClass('active_left');
  $('.slider_pic-nicole').removeClass('active_right');

  $('.slider_pic-nicolas').addClass('center');
  $('.slider_pic-nicolas').removeClass('active');
  $('.slider_pic-nicolas').removeClass('active_left');
  $('.slider_pic-nicolas').removeClass('active_right');

  $('.slider_pic-brad').removeClass('center');
  $('.slider_pic-brad').addClass('active');
  $('.slider_pic-brad').removeClass('active_left');
  $('.slider_pic-brad').addClass('active_right');

  $('.slider_pic-ryan').removeClass('center');
  $('.slider_pic-ryan').removeClass('active');
  $('.slider_pic-ryan').removeClass('active_left');
  $('.slider_pic-ryan').removeClass('active_right');
}
function changeToBrad () {/* 
  textNicole.style.display = 'none';
  textNicolas.style.display = 'none';
  textBrad.style.display = 'block';
  textRyan.style.display = 'none'; */
  
  $('.slider_text-nicole').removeClass('active-text');
  $('.slider_text-nicolas').removeClass('active-text');
  $('.slider_text-brad').addClass('active-text');
  $('.slider_text-ryan').removeClass('active-text');


  //pic
  
  $('.slider_pic-nicole').removeClass('center');
  $('.slider_pic-nicole').removeClass('active');
  $('.slider_pic-nicole').removeClass('active_left');
  $('.slider_pic-nicole').removeClass('active_right');

  $('.slider_pic-nicolas').removeClass('center');
  $('.slider_pic-nicolas').addClass('active');
  $('.slider_pic-nicolas').addClass('active_left');
  $('.slider_pic-nicolas').removeClass('active_right');

  $('.slider_pic-brad').addClass('center');
  $('.slider_pic-brad').removeClass('active');
  $('.slider_pic-brad').removeClass('active_left');
  $('.slider_pic-brad').removeClass('active_right');

  $('.slider_pic-ryan').removeClass('center');
  $('.slider_pic-ryan').addClass('active');
  $('.slider_pic-ryan').removeClass('active_left');
  $('.slider_pic-ryan').addClass('active_right');
}
function changeToRyan () {/* 
  textNicole.style.display = 'none';
  textNicolas.style.display = 'none';
  textBrad.style.display = 'none';
  textRyan.style.display = 'block'; */
  
  $('.slider_text-nicole').removeClass('active-text');
  $('.slider_text-nicolas').removeClass('active-text');
  $('.slider_text-brad').removeClass('active-text');
  $('.slider_text-ryan').addClass('active-text');


  //pic

  $('.slider_pic-nicole').removeClass('center');
  $('.slider_pic-nicole').addClass('active');
  $('.slider_pic-nicole').removeClass('active_left');
  $('.slider_pic-nicole').addClass('active_right');

  $('.slider_pic-nicolas').removeClass('center');
  $('.slider_pic-nicolas').removeClass('active');
  $('.slider_pic-nicolas').removeClass('active_left');
  $('.slider_pic-nicolas').removeClass('active_right');

  $('.slider_pic-brad').removeClass('center');
  $('.slider_pic-brad').addClass('active');
  $('.slider_pic-brad').addClass('active_left');
  $('.slider_pic-brad').removeClass('active_right');

  $('.slider_pic-ryan').addClass('center');
  $('.slider_pic-ryan').removeClass('active');
  $('.slider_pic-ryan').removeClass('active_left');
  $('.slider_pic-ryan').removeClass('active_right');
}



});