// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://learn.javascript.ru/number
import {createFeatures, createPhotos, createOffer} from './data.js';
import {generateIntegerNumber, generateNumber} from './util.js';
import{createCard} from './card.js';


const createTenOffers = () => {
  let array = [];
  for (let i = 0; i < 10; i++) {
    array[i] = createOffer();
  }
  return array;
}

let offer = createTenOffers()[0];

let insertUnit = document.querySelector('#map-canvas');

insertUnit.appendChild(createCard(offer));
console.log(offer)
console.log(insertUnit);
