// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://learn.javascript.ru/number
import {setMinSum, timeSync, guestLimit} from './card-processing.js';
import {disableForm} from './lock.js'
import {createMap, resetMainMarker, createPoints} from './map.js'

const mainPage = document.querySelector('main');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const sendingForm = document.querySelector('.ad-form');
const titleDescription = sendingForm.querySelector('#title');
const apartmentType = sendingForm.querySelector('#type');
const priceInput = sendingForm.querySelector('#price');
const roomNumber = sendingForm.querySelector('#room_number');
const guestsNumber = sendingForm.querySelector('#capacity');
const formComment = sendingForm.querySelector('#description');
const timeIn = sendingForm.querySelector('#timein');
const timeOut = sendingForm.querySelector('#timeout');
const inputAddress = sendingForm.querySelector('#address');
let element = successTemplate.cloneNode(true);

setMinSum();
timeSync();
guestLimit();
disableForm();
createMap();

fetch('https://22.javascript.pages.academy/keksobooking/data',
  {
    method: 'GET',
    credentials: 'same-origin',
  },
)
  .then ((answer) =>
    answer.json()
  )
  .then((offers) =>
     createPoints(offers)
  )
  .catch((err) => {
  const alertContainer = document.createElement('div');
  alertContainer.textContent = err;
  alertContainer.style.zIndex = 10;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'pink';
  alertContainer.style.сolor = 'aqua';
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
  })

const submitForm = document.querySelector('.ad-form');

submitForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch('https://22.javascript.pages.academy/keksobookin',
    {
      method: 'POST',
      credentials: 'same-origin',
      body: formData,
    },
  )
  .then((responce) => responce.json())
  .then((json) => {
    console.log(json);
    mainPage.appendChild(successTemplate);
    sendingForm.reset();
    titleDescription.value = '';
    apartmentType.value = 'flat';
    priceInput.placeholder = '1000';
    roomNumber.value = '1';
    guestsNumber.value = '1';
    resetMainMarker();
  })
  .catch((err) => {
    mainPage.appendChild(errorTemplate);
  })
});

document.addEventListener('click', () => {
  if (mainPage.lastChild.className === 'success'){
    mainPage.removeChild(successTemplate);
  }
  if (mainPage.lastChild.className === 'error'){
    mainPage.removeChild(errorTemplate);
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (mainPage.lastChild.className === 'success'){
      mainPage.removeChild(successTemplate);
    }
    if (mainPage.lastChild.className === 'error'){
      mainPage.removeChild(errorTemplate);
    }
  }
});


document.querySelector('.ad-form__reset').addEventListener('click', (evt) => {
  evt.preventDefault();
  sendingForm.reset();
  titleDescription.value = '';
  apartmentType.value = 'flat';
  priceInput.placeholder = '1000';
  roomNumber.value = '1';
  guestsNumber.value = '1';
  resetMainMarker();
})
