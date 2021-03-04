// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://learn.javascript.ru/number
import {TYPE_VALUES, CHECK_VALUES, FEATURE_VALUES, PHOTO_VALUES} from './data.js';
import {generateIntegerNumber, generateNumber} from './util.js';
import{fillUnit} from './generation.js';

const createFeatures = () => {
  let array = [];
  for (let i = 0; i < generateIntegerNumber(1, FEATURE_VALUES.length - 1); i++) {
    array[i] = FEATURE_VALUES[generateIntegerNumber(0, FEATURE_VALUES.length - 1)];
  }
  let filteredArray = [...new Set(array)];
  return filteredArray;
}

const createPhotos = () => {
  let array = [];
  for (let i = 0; i < generateIntegerNumber(1, 10); i++) {
    array[i] = PHOTO_VALUES[generateIntegerNumber(0, PHOTO_VALUES.length - 1)];
  }
  return array
}

const createOffer = () => {
  let xValue = generateNumber(35.65000, 35.70000, 5);
  let yValue = generateNumber(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: 'img/avatars/user0' + String(generateIntegerNumber(1,8)) + '.png',
    },
    offer: {
      title: 'Заявка номер ' + String(Math.round(Math.random() * 100)),
      address: String(xValue) + ', '+ String(yValue),
      price: Math.round(Math.random() * 100000),
      type: TYPE_VALUES[generateIntegerNumber(0, TYPE_VALUES.length - 1)],
      rooms: 1 + Math.round(Math.random() * 9),
      guests: 1 + Math.round(Math.random() * 29),
      checkin: CHECK_VALUES[generateIntegerNumber(0, CHECK_VALUES.length - 1)],
      checkout: CHECK_VALUES[generateIntegerNumber(0, CHECK_VALUES.length - 1)],
      features: createFeatures(),
      description: 'Выберите мое предложение!',
      photos: createPhotos(),
    },
    location: {
      x: xValue,
      y: yValue,
    },
  }
}

const createTenOffers = () => {
  let array = [];
  for (let i = 0; i < 10; i++) {
    array[i] = createOffer();
  }
  return array;
}

let offer = createTenOffers()[0];

let insertUnit = document.querySelector('#map-canvas');

insertUnit.appendChild(fillUnit(offer));
