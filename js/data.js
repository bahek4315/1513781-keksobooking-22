import {generateIntegerNumber, generateNumber} from './util.js';

export const TYPE_VALUES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

export const CHECK_VALUES = [
  '12:00',
  '13:00',
  '14:00',
];

export const FEATURE_VALUES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

export const PHOTO_VALUES = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

export const createFeatures = () => {
  let array = [];
  for (let i = 0; i < generateIntegerNumber(1, FEATURE_VALUES.length - 1); i++) {
    array[i] = FEATURE_VALUES[generateIntegerNumber(0, FEATURE_VALUES.length - 1)];
  }
  let filteredArray = [...new Set(array)];
  return filteredArray;
}

export const createPhotos = () => {
  let array = [];
  for (let i = 0; i < generateIntegerNumber(1, 10); i++) {
    array[i] = PHOTO_VALUES[generateIntegerNumber(0, PHOTO_VALUES.length - 1)];
  }
  return array
}

export const createOffer = () => {
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
