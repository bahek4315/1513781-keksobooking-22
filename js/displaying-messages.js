import {resetMainMarker} from './map.js';
import {formReset} from './card-processing.js'

export const createGetErrorMessage = (error) => {
  const alertContainer = document.createElement('div');
  alertContainer.textContent = error;
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'pink';
  alertContainer.style.color = 'aqua';
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
}

export const createPostSuccessMessage = () => {
  const mainPage = document.querySelector('main');
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successDiv = successTemplate.cloneNode(true);

  const successClickListenerAdd = () => {
    if (mainPage.lastChild.className === 'success'){
      mainPage.removeChild(mainPage.querySelector('.success'));
    }
    document.removeEventListener('click', successClickListenerAdd);
    document.removeEventListener('keydown', successEscListenerAdd);
  }

  const successEscListenerAdd = (evt) => {
    if (evt.keyCode === 27) {
      if (mainPage.lastChild.className === 'success'){
        mainPage.removeChild(mainPage.querySelector('.success'));
      }
    }
    document.removeEventListener('keydown', successEscListenerAdd);
    document.removeEventListener('click', successClickListenerAdd);
  }

  mainPage.appendChild(successDiv);
  document.addEventListener('click', successClickListenerAdd);
  document.addEventListener('keydown', successEscListenerAdd);
  formReset();
  resetMainMarker();
}

export const createPostErrorMessage = () => {
  const mainPage = document.querySelector('main');
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorDiv = errorTemplate.cloneNode(true);

  const errorClickListenerAdd = () => {
    if (mainPage.lastChild.className === 'error'){
      mainPage.removeChild(mainPage.querySelector('.error'));
    }
    document.removeEventListener('click', errorClickListenerAdd);
    document.removeEventListener('keydown', errorEscListenerAdd);
  }

  const errorEscListenerAdd = (evt) => {
    if (evt.keyCode === 27) {
      if (mainPage.lastChild.className === 'error'){
        mainPage.removeChild(mainPage.querySelector('.error'));
      }
    }
    document.removeEventListener('keydown', errorEscListenerAdd);
    document.removeEventListener('click', errorClickListenerAdd);
  }

  mainPage.appendChild(errorDiv);
  document.addEventListener('click', errorClickListenerAdd);
  document.addEventListener('keydown', errorEscListenerAdd);


  mainPage.querySelector('.error__button').addEventListener('click', (evt) => {
    evt.preventDefault();
    if (mainPage.lastChild.className === 'error'){
      mainPage.removeChild(mainPage.querySelector('.error'));
    }
  })
}
