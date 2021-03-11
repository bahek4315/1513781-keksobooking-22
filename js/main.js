// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://learn.javascript.ru/number
import {createTenOffers} from './data.js';
import {createCard} from './card.js';
import {setMinSum, timeSync} from './card-processing.js';

let offer = createTenOffers()[0];

let insertUnit = document.querySelector('#map-canvas');

insertUnit.appendChild(createCard(offer));

setMinSum();
timeSync();
