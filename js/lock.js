export const disableForm = () => {
  let mainForm = document.querySelector('.ad-form');
  let allMainFormFieldsets = mainForm.querySelectorAll('fieldset');
  let mapForm = document.querySelector('.map__filters');
  let allMapFormSelectors = mapForm.querySelectorAll('select');

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
  let mainForm = document.querySelector('.ad-form');
  let allMainFormFieldsets = mainForm.querySelectorAll('fieldset');
  let mapForm = document.querySelector('.map__filters');
  let allMapFormSelectors = mapForm.querySelectorAll('select');

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
