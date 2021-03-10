// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://learn.javascript.ru/number
import {createTenOffers} from './data.js';
import {createCard} from './card.js';
import {setMinSum, timeSync} from './card-processing.js';
import {disablePage, enablePage} from './lock.js'

let offer = createTenOffers()[0];

let insertUnit = document.querySelector('#map-canvas');

//insertUnit.appendChild(createCard(offer));

setMinSum();
timeSync();
disablePage();

/* global L:readonly */

const map = L.map('map-canvas')
  .on('load', () => {
    enablePage();
  })
  .setView({
    lat: 35.681700,
    lng: 139.753882,
  }, 15);

const mainMarkerIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: 35.681700,
    lng: 139.753882,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

mainMarker.addTo(map);

const inputAddress = document.querySelector('#address');
inputAddress.value = mainMarker.getLatLng().lat.toFixed(5) + ', ' + mainMarker.getLatLng().lng.toFixed(5);
inputAddress.readOnly = true;
console.dir(inputAddress);

mainMarker.on('moveend', (evt) => {
  inputAddress.value = evt.target.getLatLng().lat.toFixed(5) + ', ' + evt.target.getLatLng().lng.toFixed(5);
});

let tenOffers = createTenOffers();

console.log(tenOffers);
