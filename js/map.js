import {enableForm} from './lock.js'
import {createCard} from './card.js';

export const createMap = (tenOffers) => {

  /* global L:readonly */

  const map = L.map('map-canvas')
    .on('load', () => {
      enableForm();
    })
    .setView({
      lat: 35.681700,
      lng: 139.753882,
    }, 13);

  const mainMarkerIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
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

  mainMarker.on('moveend', (evt) => {
    inputAddress.value = evt.target.getLatLng().lat.toFixed(5) + ', ' + evt.target.getLatLng().lng.toFixed(5);
  });

  const insertUnit = document.querySelector('#map-canvas');

  for (let i = 0; i < tenOffers.length; i++) {
    insertUnit.appendChild(createCard(tenOffers[i]));
  }

  const articles = insertUnit.querySelectorAll('article');

  let points = [];

  for (let i = 0; i < tenOffers.length; i++) {
    points[i] =
      {
        title: articles[i],
        lat: tenOffers[i].location.x,
        lng: tenOffers[i].location.y,
      }
  }

  const markerIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  points.forEach(({lat, lng, title}) => {
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon: markerIcon,
      });
    marker.addTo(map);
    marker.bindPopup(title);
  });
}
