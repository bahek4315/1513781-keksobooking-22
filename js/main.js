// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://learn.javascript.ru/number

const TYPE_VALUES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECK_VALUES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURE_VALUES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTO_VALUES = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

function generateIntegerNumber (min, max) {
  if (min < 0) {
    alert('Min must be not less than 0');
  }
  if (max < min) {
    alert('Max must be more than min');
  }
  min = Math.round(min);
  max = Math.round(max);
  return Math.round((Math.random() * (max - min)) + min);
}

function generateNumber (min, max, digits) {
  if (min < 0) {
    alert('Min must be not less than 0');
  }
  if (max < min) {
    alert('Max must be more than min');
  }
  return parseFloat(((Math.random() * (max - min)) + min).toFixed(digits));
}

function createFeatures () {
  let array = [];
  for (let i = 0; i < generateIntegerNumber(1, FEATURE_VALUES.length - 1); i++) {
    array[i] = FEATURE_VALUES[generateIntegerNumber(0, FEATURE_VALUES.length - 1)];
  }
  let filteredArray = [...new Set(array)];
  return filteredArray;
}

function createPhotos () {
  let array = [];
  for (let i = 0; i < generateIntegerNumber(1, 10); i++) {
    array[i] = PHOTO_VALUES[generateIntegerNumber(0, PHOTO_VALUES.length - 1)];
  }
  return array
}

function createOffer () {
  let xValue = generateNumber(35.65000, 35.70000, 5);
  let yValue = generateNumber(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: 'img/avatars/user{{0' + String(generateIntegerNumber(1,8)) + '}}.png',
    },
    offer: {
      title: 'Заявка номер ' + String(Math.round(Math.random() * 100)),
      address: '{{' + String(xValue) + '}}, {{' + String(yValue) + '}}',
      price: Math.round(Math.random() * 100000),
      type: TYPE_VALUES[generateIntegerNumber(0, TYPE_VALUES.length - 1)],
      rooms: Math.round(Math.random() * 10),
      guests: Math.round(Math.random() * 30),
      checkin: CHECK_VALUES[generateIntegerNumber(0, CHECK_VALUES.length - 1)],
      checkout: CHECK_VALUES[generateIntegerNumber(0, CHECK_VALUES.length - 1)],
      features: createFeatures(),
      describtion: 'Выберите мое предложение!',
      photos: createPhotos(),
    },
    location: {
      x: xValue,
      y: yValue,
    },
  }
}

function createTenOffers () {
  let array = [];
  for (let i = 0; i < 10; i++) {
    array[i] = createOffer();
  }
  return array;
}

createTenOffers();
