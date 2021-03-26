import {createGetErrorMessage, createPostSuccessMessage, createPostErrorMessage} from './displaying-messages.js';

export const receiveMarkers = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then ((answer) => {
      if (answer.ok) {
        return answer.json();
      } else {
        createGetErrorMessage('Something went wrong1');
      }
    })
    .then ((markers) => {
      onSuccess(markers);
    })
    .catch(() => {
      createGetErrorMessage('Something went wrong2');
    })
}

export const sendForm = (formData) => {
  fetch('https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      credentials: 'same-origin',
      body: formData,
    },
  )
    .then((responce) => {
      if (responce.ok) {
        createPostSuccessMessage();
      } else {
        createPostErrorMessage()
      }
    })
    .catch(() => {
      createPostErrorMessage()
    })
}
