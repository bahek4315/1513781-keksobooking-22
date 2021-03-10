// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://learn.javascript.ru/number
import {createTenOffers} from './data.js';
import {createCard} from './card.js';
import {disablePage, enablePage} from './lock.js'

let offer = createTenOffers()[0];

let insertUnit = document.querySelector('#map-canvas');

disablePage();

/* global L:readonly */

const map = L.map('map-canvas')
  .on('load', () => {
    console.log('Карта инициализирована')
    enablePage()
  })
  .setView({
    lat: 35.681700,
    lng: 139.753882,
  }, 15);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
