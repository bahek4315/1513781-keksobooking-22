import {resetMainMarker, resetMarkers} from './map.js';
import {receiveMarkers, sendForm} from './server-communication.js';
import {createPoints} from './map.js';
import {filterOffersDefault} from './filter.js'

export const setMinSum = () => {
  const buildingType = document.querySelector('#type');
  const priceInput = document.querySelector('#price');
  const titleInput = document.querySelector('#title');

  priceInput.max = 1000000;
  titleInput.minLength = 30;
  titleInput.maxLength = 100;

  if (buildingType.value === 'flat') {
    priceInput.min = 1000;
    priceInput.placeholder = '1000'
  }
  buildingType.addEventListener('change', () => {
    if (buildingType.value === 'bungalow') {
      priceInput.min = 0;
      priceInput.placeholder = '0'
    }
    if (buildingType.value === 'flat') {
      priceInput.min = 1000
      priceInput.placeholder = '1000'
    }
    if (buildingType.value === 'house') {
      priceInput.min = 5000;
      priceInput.placeholder = '5000'
    }
    if (buildingType.value === 'palace') {
      priceInput.min = 10000;
      priceInput.placeholder = '10000'
    }
  })

}

export const synchronizeTime = () => {
  const timeIn = document.querySelector('#timein');
  const timeOut = document.querySelector('#timeout');
  timeIn.addEventListener('change', () => {
    timeOut.value = timeIn.value;
  })
  timeOut.addEventListener('change', () => {
    timeIn.value = timeOut.value;
  })
}

export const validateGuestsCapacity = () => {
  const roomInput = document.querySelector('#room_number');
  const guestsInput = document.querySelector('#capacity');
  guestsInput.innerHTML = '<option value="1">для 1 гостя</option>';

  roomInput.addEventListener('change', () => {
    const roomCapacity = {
      100: '<option value="0">не для гостей</option>',
      1: '<option value="1">для 1 гостя</option>',
      2: '<option value="2">для 2 гостей</option> <option value="1"> для 1 гостя</option>',
      3: '<option value="3">для 3 гостей</option> <option value="2">для 2 гостей</option> <option value="1">для 1 гостя</option>',
    }
    guestsInput.innerHTML = roomCapacity[roomInput.value];
  })
}

export const formReset = () => {
  const sendingForm = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');
  const titleDescription = sendingForm.querySelector('#title');
  const apartmentType = sendingForm.querySelector('#type');
  const priceInput = sendingForm.querySelector('#price');
  const roomNumber = sendingForm.querySelector('#room_number');
  const guestsNumber = sendingForm.querySelector('#capacity');
  sendingForm.reset();
  mapFilters.reset();
  resetMarkers();
  receiveMarkers((markers) => {
    createPoints(filterOffersDefault(markers));
  });
  titleDescription.value = '';
  apartmentType.value = 'flat';
  priceInput.placeholder = '1000';
  roomNumber.value = '1';
  guestsNumber.innerHTML = '<option value="1">для 1 гостя</option>';
}

export const setSendButton = () => {
  const submitForm = document.querySelector('.ad-form');
  submitForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    sendForm(formData);
  })
}

export const setResetButton = () => {
  document.querySelector('.ad-form__reset').addEventListener('click', (evt) => {
    evt.preventDefault();
    formReset();
    resetMainMarker();
  })
}
