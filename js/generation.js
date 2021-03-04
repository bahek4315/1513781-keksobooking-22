const fillUnit = (oneOffer) => {
  let template = document.querySelector('#card').content.querySelector('article');
  let element = template.cloneNode(true);

  element.querySelector('.popup__title').textContent = oneOffer.offer.title;
  element.querySelector('.popup__text--address').textContent = oneOffer.offer.address;
  element.querySelector('.popup__text--price').textContent = oneOffer.offer.price + ' ' + element.querySelector('.popup__text--price').querySelector('span').textContent;

  if (oneOffer.offer.type === 'palace') {
    element.querySelector('.popup__type').textContent = 'Дворец'
  }
  if (oneOffer.offer.type === 'flat') {
    element.querySelector('.popup__type').textContent = 'Квартира'
  }
  if (oneOffer.offer.type === 'house') {
    element.querySelector('.popup__type').textContent = 'Дом'
  }
  if (oneOffer.offer.type === 'bungalow') {
    element.querySelector('.popup__type').textContent = 'Бунгало'
  }
  //max ammount of rooms is 10, can increase if needed
  if (oneOffer.offer.rooms === 1) {
    element.querySelector('.popup__text--capacity').textContent = oneOffer.offer.rooms + ' комната';
  } else if (oneOffer.offer.rooms === 2 || oneOffer.offer.rooms === 3 || oneOffer.offer.rooms === 4) {
    element.querySelector('.popup__text--capacity').textContent = oneOffer.offer.rooms + ' комнаты';
  } else {
    element.querySelector('.popup__text--capacity').textContent = oneOffer.offer.rooms + ' комнат';
  }
  //max ammount of guests is 30, can increase if needed
  if (oneOffer.offer.guests === 1 || oneOffer.offer.guests === 21) {
    element.querySelector('.popup__text--capacity').textContent = element.querySelector('.popup__text--capacity').textContent + ' для ' + oneOffer.offer.guests + ' гостя'
  } else {
    element.querySelector('.popup__text--capacity').textContent = element.querySelector('.popup__text--capacity').textContent + ' для ' + oneOffer.offer.guests + ' гостей'
  }

  element.querySelector('.popup__text--time').textContent = 'Заезд после ' + oneOffer.offer.checkin + ' выезд до ' + oneOffer.offer.checkout;

  element.querySelector('.popup__description').textContent = oneOffer.offer.description;

  element.querySelector('.popup__avatar').src = oneOffer.author.avatar;

  //Delete all <li> in <ul> of features
  for (let i = element.querySelector('.popup__features').querySelectorAll('li').length - 1; i >= 0; i--) {
    element.querySelector('.popup__features').removeChild(element.querySelector('.popup__features').querySelectorAll('li')[i])
  }
  //create <li> if there is wifi
  for (let i = oneOffer.offer.features.length; i >= 0; i--) {
    if (oneOffer.offer.features[i] === 'wifi') {
      element.querySelector('.popup__features').insertAdjacentHTML('beforeend', '<li class="popup__feature popup__feature--wifi"></li>');
    }
  }
  //create <li> if there is dishwasher
  for (let i = oneOffer.offer.features.length; i >= 0; i--) {
    if (oneOffer.offer.features[i] === 'dishwasher') {
      element.querySelector('.popup__features').insertAdjacentHTML('beforeend', '<li class="popup__feature popup__feature--dishwasher"></li>');
    }
  }
  //create <li> if there is parking
  for (let i = oneOffer.offer.features.length; i >= 0; i--) {
    if (oneOffer.offer.features[i] === 'parking') {
      element.querySelector('.popup__features').insertAdjacentHTML('beforeend', '<li class="popup__feature popup__feature--parking"></li>');
    }
  }
  //create <li> if there is washer
  for (let i = oneOffer.offer.features.length; i >= 0; i--) {
    if (oneOffer.offer.features[i] === 'washer') {
      element.querySelector('.popup__features').insertAdjacentHTML('beforeend', '<li class="popup__feature popup__feature--washer"></li>');
    }
  }
  //create <li> if there is elevator
  for (let i = oneOffer.offer.features.length; i >= 0; i--) {
    if (oneOffer.offer.features[i] === 'elevator') {
      element.querySelector('.popup__features').insertAdjacentHTML('beforeend', '<li class="popup__feature popup__feature--elevator"></li>');
    }
  }
  //create <li> if there is conditioner
  for (let i = oneOffer.offer.features.length; i >= 0; i--) {
    if (oneOffer.offer.features[i] === 'conditioner') {
      element.querySelector('.popup__features').insertAdjacentHTML('beforeend', '<li class="popup__feature popup__feature--conditioner"></li>');
    }
  }

  element.querySelector('.popup__photos').removeChild(element.querySelector('.popup__photos').querySelector('img'));
  for (let i = 0; i < oneOffer.offer.photos.length; i++) {
    let newPhoto = document.createElement('img');
    newPhoto.classList.add('popup__photo');
    newPhoto.src = oneOffer.offer.photos[i];
    element.querySelector('.popup__photos').appendChild(newPhoto);
  }
  return element;
}
export {fillUnit}
