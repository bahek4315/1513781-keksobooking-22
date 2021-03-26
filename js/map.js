'use strict';
import {enableForm} from './lock.js'
import {createCard} from './card.js';
import {receiveMarkers} from './server-communication.js';
import {setEventListenerFilter, filterOffers, filterOffersDefault} from './filter.js'

const inputAddress = document.querySelector('#address');

const map = L.map('map-canvas');
const pinsLayer = L.layerGroup();
const mainMarkerIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

let mainMarker = L.marker(
  {
    lat: 35.681700,
    lng: 139.753882,
  },
  {
    draggable: true,
    icon: mainMarkerIcon,
  },
);

export const createMap = () => {
  /* global L:readonly */

  map.on('load', () => {
    enableForm();
    receiveMarkers((markers) => {
      createPoints(filterOffersDefault(markers));

      setEventListenerFilter(() => {
        resetMarkers();
        createPoints(filterOffers(markers));
      })
    });
  })
    .setView({
      lat: 35.681700,
      lng: 139.753882,
    }, 8);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  mainMarker = L.marker(
    {
      lat: 35.681700,
      lng: 139.753882,
    },
    {
      draggable: true,
      icon: mainMarkerIcon,
    },
  );
  mainMarker.addTo(map);

  inputAddress.value = mainMarker.getLatLng().lat.toFixed(5) + ', ' + mainMarker.getLatLng().lng.toFixed(5);
  inputAddress.readOnly = true;

  mainMarker.on('moveend', (evt) => {
    inputAddress.value = evt.target.getLatLng().lat.toFixed(5) + ', ' + evt.target.getLatLng().lng.toFixed(5);
  });

}

export const resetMainMarker = () => {
  map.removeLayer(mainMarker);
  mainMarker = L.marker(
    {
      lat: 35.681700,
      lng: 139.753882,
    },
    {
      draggable: true,
      icon: mainMarkerIcon,
    },
  );
  mainMarker.addTo(map);
  inputAddress.value = mainMarker.getLatLng().lat.toFixed(5) + ', ' + mainMarker.getLatLng().lng.toFixed(5);
  inputAddress.readOnly = true;

  mainMarker.on('moveend', (evt) => {
    inputAddress.value = evt.target.getLatLng().lat.toFixed(5) + ', ' + evt.target.getLatLng().lng.toFixed(5);
  });
}

export const createPoints = (tenOffers) => {
  let points = [];

  for (let i = 0; i < tenOffers.length; i++) {
    points[i] =
      {
        title: createCard(tenOffers[i]),
        lat: tenOffers[i].location.lat,
        lng: tenOffers[i].location.lng,
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
    marker.addTo(pinsLayer);
    marker.bindPopup(title);
  });
  pinsLayer.addTo(map);
}

export const resetMarkers = () => {
  pinsLayer.clearLayers();
}
