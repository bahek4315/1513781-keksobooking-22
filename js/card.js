export const createCard = (oneOffer) => {
  let template = document.querySelector('#card').content.querySelector('article');
  let element = template.cloneNode(true);
  let features = oneOffer.offer.features;
  let insertFeatures =   element.querySelector('.popup__features');

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
  if (oneOffer.offer.rooms === 1) {
    element.querySelector('.popup__text--capacity').textContent = oneOffer.offer.rooms + ' комната';
  } else if (oneOffer.offer.rooms === 2 || oneOffer.offer.rooms === 3 || oneOffer.offer.rooms === 4) {
    element.querySelector('.popup__text--capacity').textContent = oneOffer.offer.rooms + ' комнаты';
  } else {
    element.querySelector('.popup__text--capacity').textContent = oneOffer.offer.rooms + ' комнат';
  }
  if (oneOffer.offer.guests === 1 || oneOffer.offer.guests === 21) {
    element.querySelector('.popup__text--capacity').textContent = element.querySelector('.popup__text--capacity').textContent + ' для ' + oneOffer.offer.guests + ' гостя'
  } else {
    element.querySelector('.popup__text--capacity').textContent = element.querySelector('.popup__text--capacity').textContent + ' для ' + oneOffer.offer.guests + ' гостей'
  }

  element.querySelector('.popup__text--time').textContent = 'Заезд после ' + oneOffer.offer.checkin + ' выезд до ' + oneOffer.offer.checkout;

  if (!oneOffer.offer.description) {
    element.querySelector('.popup__description').remove();
  } else {
    element.querySelector('.popup__description').textContent = oneOffer.offer.description;
  }


  element.querySelector('.popup__avatar').src = oneOffer.author.avatar;

  element.querySelector('.popup__features').innerHTML = '';

  if (oneOffer.offer.features.length === 0) {
    element.querySelector('.popup__features').remove();
  } else {
    for (let i = 0; i < oneOffer.offer.features.length; i++) {
      let oneFeature = document.createElement('li');
      oneFeature.classList.add('popup__feature');
      oneFeature.classList.add('popup__feature--' + features[i]);
      insertFeatures.appendChild(oneFeature);
    }
  }

  element.querySelector('.popup__photos').removeChild(element.querySelector('.popup__photos').querySelector('img'));
  if (oneOffer.offer.photos.length === 0) {
    element.querySelector('.popup__photos').remove();
  } else {
    for (let i = 0; i < oneOffer.offer.photos.length; i++) {
      let newPhoto = document.createElement('img');
      newPhoto.classList.add('popup__photo');
      newPhoto.src = oneOffer.offer.photos[i];
      newPhoto.width = 45;
      newPhoto.height = 40;
      element.querySelector('.popup__photos').appendChild(newPhoto);
    }
  }
  return element;
}
