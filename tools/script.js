//'usestrict'

var perf = document.querySelector('.perf');
var perforators = document.querySelector('.perforators');
var kluch = document.querySelector('.kluch');
var kluchs = document.querySelector('.kluchs');
var molotok = document.querySelector('.molotok');
var molotoks = document.querySelector('.molotoks');
var main = document.querySelector('.main');
var modalMenu = document.querySelector('.modal-menu');
var modalClose = document.querySelector('.modal-close');
var minValue = 0;
var maxValue = 1;


perf.addEventListener('click', function (evt) {
  main.classList.add('hidden');
  modalMenu.classList.remove('hidden');
  perforators.classList.remove('hidden');
  modalClose.classList.remove('hidden');
  document.querySelector('.perf-price').classList.remove('hidden');
  perfPriceMin.textContent = perfMin;
  perfPriceMax.textContent = perfMax;
})
kluch.addEventListener('click', function (evt) {
  main.classList.add('hidden');
  modalMenu.classList.remove('hidden');
  kluchs.classList.remove('hidden');
  modalClose.classList.remove('hidden');
  document.querySelector('.kluch-price').classList.remove('hidden');
  kluchPriceMin.textContent = klucsMin;
  kluchPriceMax.textContent = klucsMax;
})
molotok.addEventListener('click', function (evt) {
  main.classList.add('hidden');
  modalMenu.classList.remove('hidden');
  molotoks.classList.remove('hidden');
  modalClose.classList.remove('hidden');
  document.querySelector('.molotok-price').classList.remove('hidden');
  molotokPriceMin.textContent = molotsMin;
  molotokPriceMax.textContent = molotsMax;
})
modalClose.addEventListener('click', function (evt) {
  main.classList.remove('hidden');
  modalMenu.classList.add('hidden');
  perforators.classList.add('hidden');
  kluchs.classList.add('hidden');
  molotoks.classList.add('hidden');
  modalClose.classList.add('hidden');
  document.querySelector('.perf-price').classList.add('hidden');
  document.querySelector('.kluch-price').classList.add('hidden');
  document.querySelector('.molotok-price').classList.add('hidden');
  minValue = 0;
  maxValue = 1;
  minPin.style.left = 0 + 'px';
  maxPin.style.left = 460 + 'px';

})


//Отрисовка динамических элементов

var itemsTemplate = document.querySelector('.item-template').content; //трафарет
var similarPerf = document.querySelector('.perf-items'); //куда вставляем
var similarMolotok = document.querySelector('.molotok-items');
var similarKluch = document.querySelector('.kluch-items');

var perfMin = perfs[0].price;
var perfMax = perfs[0].price;
var molotsMin = molots[0].price;
var molotsMax = molots[0].price;
var klucsMin = klucs[0].price;
var klucsMax = klucs[0].price;



var renderItems = function (array) {
  var itemsElement = itemsTemplate.cloneNode(true);
  itemsElement.querySelector('.item img').src = array.src;
  itemsElement.querySelector('.item-stat-likes').textContent = array.likes;
  itemsElement.querySelector('.item-stat-price').textContent = (array.price) + ' p';
  itemsElement.querySelector('.item-stat-name').textContent = array.name;
  return itemsElement;
}

var render = function(){
var fragment1 = document.createDocumentFragment();
  for (var i = 0; i < perfs.length; i++) {
    if ((perfs[i].price > (perfMax * minValue)) && (perfs[i].price < (perfMax * maxValue + 1))) { fragment1.appendChild(renderItems(perfs[i]));}
  }
similarPerf.appendChild(fragment1);

var fragment2 = document.createDocumentFragment();
  for (var i = 0; i < molots.length; i++) {
    if ((molots[i].price > (molotsMax * minValue)) && (molots[i].price < (molotsMax * maxValue + 1))) { fragment2.appendChild(renderItems(molots[i]));}
  }
similarMolotok.appendChild(fragment2);

var fragment3 = document.createDocumentFragment();
  for (var i = 0; i < klucs.length; i++) {
    if ((klucs[i].price > (klucsMax * minValue)) && (klucs[i].price < (klucsMax * maxValue + 1))) { fragment3.appendChild(renderItems(klucs[i]));}
  }
similarKluch.appendChild(fragment3);
};


var unRender = function(){
var similarPerfLength = similarPerf.querySelectorAll('a').length;
for (i = 0; i < similarPerfLength; i++){
    var removePic = similarPerf.querySelector('a');
    removePic.parentNode.removeChild(removePic);
}
var similarMolotLength = similarMolotok.querySelectorAll('a').length;
for (i = 0; i < similarMolotLength; i++){
    var removePic = similarMolotok.querySelector('a');
    removePic.parentNode.removeChild(removePic);
}
var similarKluchLength = similarKluch.querySelectorAll('a').length;
for (i = 0; i < similarKluchLength; i++){
    var removePic = similarKluch.querySelector('a');
    removePic.parentNode.removeChild(removePic);
}
};

// Сортировка

for (var i = 0; i < perfs.length; i++) {
    if (perfs[i].price < perfMin) {perfMin = perfs[i].price;};
    if (perfs[i].price > perfMax) {perfMax = perfs[i].price;};
}

for (var i = 0; i < molots.length; i++) {
    if (molots[i].price < molotsMin) {molotsMin = molots[i].price;};
    if (molots[i].price > molotsMax) {molotsMax = molots[i].price;};
}

for (var i = 0; i < klucs.length; i++) {
    if (klucs[i].price < klucsMin) {klucsMin = klucs[i].price;};
    if (klucs[i].price > klucsMax) {klucsMax = klucs[i].price;};
}
render ();

var filters = document.querySelector('.sort-style');
var sortType = document.querySelectorAll('.sort-type');

filters.addEventListener('click', function(evt){

  //fragment = 0;
  //console.log(fragment);

  unRender();


  if (evt.target === sortType[0]) {

      perfs.sort(function (first, second) {
        if (first.price > second.price) {return 1;}
        else if (first.price < second.price) {return -1;}
        else {return 0;}})
      molots.sort(function (first, second) {
        if (first.price > second.price) {return 1;}
        else if (first.price < second.price) {return -1;}
        else {return 0;}})
      klucs.sort(function (first, second) {
        if (first.price > second.price) {return 1;}
        else if (first.price < second.price) {return -1;}
        else {return 0;}})
      }
  if (evt.target === sortType[1]) {

      perfs.sort(function (first, second) {
        if (first.likes < second.likes) {return 1;}
        else if (first.likes > second.likes) {return -1;}
        else {return 0;}})
      molots.sort(function (first, second) {
        if (first.likes < second.likes) {return 1;}
        else if (first.likes > second.likes) {return -1;}
        else {return 0;}})
      klucs.sort(function (first, second) {
        if (first.likes < second.likes) {return 1;}
        else if (first.likes > second.likes) {return -1;}
        else {return 0;}})
      }
  if (evt.target === sortType[2]) {

      perfs.sort(function (first, second) {
        if (first.number > second.number) {return 1;}
        else if (first.number < second.number) {return -1;}
        else {return 0;}})
      molots.sort(function (first, second) {
        if (first.number > second.number) {return 1;}
        else if (first.number < second.number) {return -1;}
        else {return 0;}})
      klucs.sort(function (first, second) {
        if (first.number > second.number) {return 1;}
        else if (first.number < second.number) {return -1;}
        else {return 0;}})
      }

    render();

})



// Слайдер цены

var perfPriceMin = document.querySelector('.perf-price-min');
var perfPriceMax = document.querySelector('.perf-price-max');
var kluchPriceMin = document.querySelector('.kluchs-price-min');
var kluchPriceMax = document.querySelector('.kluchs-price-max');
var molotokPriceMin = document.querySelector('.molotoks-price-min');
var molotokPriceMax = document.querySelector('.molotoks-price-max');
var minValue = 0;
var maxValue = 1;
perfPriceMin.textContent = perfMin;
perfPriceMax.textContent = perfMax;
kluchPriceMin.textContent = klucsMin;
kluchPriceMax.textContent = klucsMax;
molotokPriceMin.textContent = molotsMin;
molotokPriceMax.textContent = molotsMax;


var effectLine = document.querySelector('.price-level-line');
var minPin = document.querySelector('.price-low-level-pin');
var maxPin = document.querySelector('.price-high-level-pin');
var minprice = 0;
var maxprice = 550;

effectLine.addEventListener('mousedown', function(evt) {
  targetName = ((evt.target.classList.value.replace('price-', '')).replace('-pin', ''));

  evt.preventDefault();
var startCoordsX = evt.clientX;

var onMouseMove = function (moveEvt) {
  moveEvt.preventDefault();
  var shiftX = startCoordsX - moveEvt.clientX;
  startCoordsX = moveEvt.clientX;


  if (targetName === 'low-level') {

      minPin.style.left = (minPin.offsetLeft - shiftX) + 'px';
      minValue = (minPin.offsetLeft / 450).toFixed(3);


      if (minPin.offsetLeft - shiftX < 0)
      {minPin.style.left = 0 + 'px';
      minValue = 0;
      };

      if (minPin.offsetLeft - shiftX > (maxPin.offsetLeft - 20))
      {minPin.style.left = ( maxPin.offsetLeft - 20 ) + 'px';
      minValue = (maxPin.offsetLeft / 450).toFixed(3);
      };
//      effectLine.style.width = (effectValue * 100) + '%';
      };

  if (targetName === 'high-level') {

      maxPin.style.left = (maxPin.offsetLeft - shiftX) + 'px';
      maxValue = ((maxPin.offsetLeft - shiftX) / 450).toFixed(3);

      if (maxPin.offsetLeft - shiftX < (minPin.offsetLeft + 20))
      {maxPin.style.left = (minPin.offsetLeft + 20) + 'px';
      maxValue = (minPin.offsetLeft / 450).toFixed(3);
      };

      if (maxPin.offsetLeft - shiftX > 460)
      {maxPin.style.left = 460 + 'px';
      maxValue = 1;
      };
//      effectLine.style.width = (effectValue * 100) + '%';

      };
      perfPriceMin.textContent = (perfMax * minValue).toFixed();
      perfPriceMax.textContent = (perfMax * maxValue).toFixed();

      kluchPriceMin.textContent = (klucsMax * minValue).toFixed();
      kluchPriceMax.textContent = (klucsMax * maxValue).toFixed();

      molotokPriceMin.textContent = (molotsMax * minValue).toFixed();
      molotokPriceMax.textContent = (molotsMax * maxValue).toFixed();
};

var onMouseUp = function(upEvt) {
  upEvt.preventDefault();


  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);

  unRender();
  render();

};

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
});
