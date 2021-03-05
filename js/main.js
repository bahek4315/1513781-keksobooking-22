// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://learn.javascript.ru/number
import {createFeatures, createPhotos, createOffer, createTenOffers} from './data.js';
import {generateIntegerNumber, generateNumber} from './util.js';
import{createCard} from './card.js';

let offer = createTenOffers()[0];

let insertUnit = document.querySelector('#map-canvas');

insertUnit.appendChild(createCard(offer));
