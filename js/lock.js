'use strict';
export const disableForm = () => {
  const mainForm = document.querySelector('.ad-form');
  const allMainFormFieldsets = mainForm.querySelectorAll('fieldset');
  const mapForm = document.querySelector('.map__filters');
  const allMapFormSelectors = mapForm.querySelectorAll('select');

  mainForm.classList.add('ad-form--disabled');
  mapForm.classList.add('map__filters--disabled');

  for (let i = 0; i < allMainFormFieldsets.length; i++) {
    allMainFormFieldsets[i].disabled = true;
  }

  mapForm.querySelector('fieldset').disabled = true;

  for (let i = 0; i < allMapFormSelectors.length; i++) {
    allMapFormSelectors[i].disabled = true;
  }
}

export const enableForm = () => {
  const mainForm = document.querySelector('.ad-form');
  const allMainFormFieldsets = mainForm.querySelectorAll('fieldset');
  const mapForm = document.querySelector('.map__filters');
  const allMapFormSelectors = mapForm.querySelectorAll('select');

  mainForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('map__filters--disabled');

  for (let i = 0; i < allMainFormFieldsets.length; i++) {
    allMainFormFieldsets[i].disabled = false;
  }

  mapForm.querySelector('fieldset').disabled = false;

  for (let i = 0; i < allMapFormSelectors.length; i++) {
    allMapFormSelectors[i].disabled = false;
  }
}
