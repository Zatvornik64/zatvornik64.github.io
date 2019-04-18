var presentationBlock = document.querySelector('.presentation');
var presentation = document.querySelectorAll('.pres');
var track = document.querySelectorAll('.track');
var kran = document.querySelectorAll('.kran');
var text = document.querySelectorAll('.text');
var wallie = document.querySelector('.wallie');
var modal = document.querySelector('.modal-menu');
var modalClose = document.querySelector('.modal-close');
var modalInner = document.querySelectorAll('.modal-inner');
var wall = ['img/wall1.png', 'img/wall2.png', 'img/wall3.png', 'img/wall4.png', 'img/wall5.png', 'img/wall6.png', 'img/wall7.png', 'img/wall8.png'];
var slides0 = document.querySelectorAll('.slider0');
var slides1 = document.querySelectorAll('.slider1');
var slides2 = document.querySelectorAll('.slider2');
var slides3 = document.querySelectorAll('.slider3');
var slides4 = document.querySelectorAll('.slider4');
var ESCCODE = 27;
var coordY = 0;
var coordX = 0;
var modalNumber = 0;
var currentSlide = 0;

window.addEventListener('load', function(evt) {
  //presentation[0].classList.remove('hidden');
  //presentation[0].classList.add('presentation-show');

  var i = 0;


//var interval2 = setInterval(function() {
//    presentation[i].classList.add('presentation-show');
  var interval = setInterval(function() {
    if (i < 6) {

    if (i < 5) {
    presentation[i].classList.remove('hidden1');
    presentation[i].classList.add('presentation-show');
    track[i].classList.add('track1');
    //track[i-1].classList.remove('hidden2');
    };
    //console.log(kran[i]);
    //console.log(i);
    if (i > 0) {
      presentation[i-1].classList.add('up');
      //track[i-1].classList.add('hidden2');
      kran[i-1].classList.remove('hidden1');
      track[i-1].classList.remove('track1');
      track[i-1].classList.add('track2');
      //if (i < 5){track[i].classList.add('track2');};
    };
    };
    if (i > 1) {

      kran[i-2].classList.add('hidden2');
      track[i-2].classList.add('hidden');
      text[i-2].classList.remove('hidden');
      text[i-2].classList.add('hidden3');
    };
      if (++i > 6) {
          clearInterval(interval);
        }
  }, 2000);
})

function getRandom(min, max) {
  temp = Math.floor(Math.random() * ( max - min )) + min;
  return temp;
};

var interval2 = setInterval(function(){
coordY = (getRandom(3, 50));
coordX = (getRandom(20, 90));
wallie.style.top = coordY  + 'vh';
wallie.style.left = coordX  + 'vw';
wallie.src = 'img/wallie.png';
wallie.style.height = '5vh';
wallie.style.width = '5vh';
}, 15000);

wallie.addEventListener('click', function(){
  wallie.src = wall[getRandom(0, 8)];
  wallie.style.height = '22vh';
  wallie.style.width = '18vw';
  wallie.style.top = (coordY - 10) + 'vh';
  wallie.style.left = (coordX - 4.5) + 'vw';
})
presentationBlock.addEventListener ('click', function (evt){
  modal.classList.remove('hidden');
  modalNumber = evt.target.classList[1].replace('pic', '');
  //console.log(modalNumber);
  modalInner[modalNumber].classList.remove('hidden');
  presentationBlock.classList.add('hidden');
  wallie.classList.add('hidden');
  //modalClose.classList.remove('hidden');
})
modalClose.addEventListener ('click', function (evt){
  modal.classList.add('hidden');
  presentationBlock.classList.remove('hidden');
  wallie.classList.remove('hidden');
  modalInner[modalNumber].classList.add('hidden');
  //console.log(modalNumber);
})
document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ESCCODE) {
    modal.classList.add('hidden');
    presentationBlock.classList.remove('hidden');
    modalInner[modalNumber].classList.add('hidden');
  }
});

var slideInterval = setInterval(function(){
    slides0[currentSlide].classList.remove('showing');
    slides1[currentSlide].classList.remove('showing');
    slides2[currentSlide].classList.remove('showing');
    slides3[currentSlide].classList.remove('showing');
    slides4[currentSlide].classList.remove('showing');
    currentSlide = (currentSlide+1)%slides0.length;
    slides0[currentSlide].classList.add('showing');
    slides1[currentSlide].classList.add('showing');
    slides2[currentSlide].classList.add('showing');
    slides3[currentSlide].classList.add('showing');
    slides4[currentSlide].classList.add('showing');
}, 4000);
