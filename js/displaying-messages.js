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
  mainPage.appendChild(successDiv);
  document.addEventListener('click', () => {
    if (mainPage.lastChild.className === 'success'){
      mainPage.removeChild(mainPage.querySelector('.success'));
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      if (mainPage.lastChild.className === 'success'){
        mainPage.removeChild(mainPage.querySelector('.success'));
      }
    }
  });
}

export const createPostErrorMessage = () => {
  const mainPage = document.querySelector('main');
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorDiv = errorTemplate.cloneNode(true);
  mainPage.appendChild(errorDiv);
  mainPage.querySelector('.error__button').addEventListener('click', (evt) => {
    evt.preventDefault();
    if (mainPage.lastChild.className === 'error'){
      mainPage.removeChild(mainPage.querySelector('.error'));
    }
  })
  document.addEventListener('click', () => {
    if (mainPage.lastChild.className === 'error'){
      mainPage.removeChild(mainPage.querySelector('.error'));
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      if (mainPage.lastChild.className === 'error'){
        mainPage.removeChild(mainPage.querySelector('.error'));
      }
    }
  });
}
