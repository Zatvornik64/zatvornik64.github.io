var slides = document.querySelectorAll('.slider');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

function nextSlide() {
    slides[currentSlide].className = 'slider';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slider showing';
}
var rightBg = document.querySelector('.rightBg');
var empty = document.querySelector('.empty');

  rightBg.onmouseenter = function() {
    empty.classList.add('hover');
  };

  rightBg.onmouseleave = function() {
    empty.classList.remove('hover');
  };

  empty.onmouseenter = function() {
    empty.classList.add('hover');
  };

  empty.onmouseleave = function() {
    empty.classList.remove('hover');
  };

  var leftBg = document.querySelector('.leftBg');
  var men = document.querySelector('.men');

    leftBg.onmouseenter = function() {
      men.classList.add('hover');
    };

    leftBg.onmouseleave = function() {
      men.classList.remove('hover');
    };

    men.onmouseenter = function() {
      men.classList.add('hover');
    };

    men.onmouseleave = function() {
      men.classList.remove('hover');
    };
