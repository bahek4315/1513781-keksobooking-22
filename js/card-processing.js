export const setMinSum = () => {
  const buildingType = document.querySelector('#type');
  const priceInput = document.querySelector('#price');
  const titleInput = document.querySelector('#title');

  priceInput.max = 1000000;
  titleInput.minLength = 30;
  titleInput.maxLength = 100;
  //без этого не работает валидация, если ничего не выбирать в теге <select>, те оставить "квартира" по дефолту, решил сделать такой код
  if (buildingType.value === 'flat') {
    priceInput.min = 1000;
    priceInput.placeholder = '1000'
  }
  buildingType.addEventListener('change', function () {
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

export const timeSync = () => {
  const timeIn = document.querySelector('#timein');
  const timeOut = document.querySelector('#timeout');
  timeIn.addEventListener('change', function (){
    timeOut.value = timeIn.value;
  })
  timeOut.addEventListener('change', function (){
    timeIn.value = timeOut.value;
  })
}

export const guestLimit = () => {
  const roomInput = document.querySelector('#room_number');
  const guestsInput = document.querySelector('#capacity');
  const guestsOptions = guestsInput.querySelectorAll('option');


  if (roomInput.value === '1') {
    guestsOptions[0].disabled = true;
    guestsOptions[1].disabled = true;
    guestsOptions[2].disabled = false;
    guestsOptions[3].disabled = true;
    guestsInput.value = '1';
  }

  roomInput.addEventListener('change', function () {
    if (roomInput.value === '1') {
      guestsOptions[0].disabled = true;
      guestsOptions[1].disabled = true;
      guestsOptions[2].disabled = false;
      guestsOptions[3].disabled = true;
      guestsInput.value = '1';
    }
    if (roomInput.value === '2') {
      guestsOptions[0].disabled = true;
      guestsOptions[1].disabled = false;
      guestsOptions[2].disabled = false;
      guestsOptions[3].disabled = true;
      guestsInput.value = '2';
    }
    if (roomInput.value === '3') {
      guestsOptions[0].disabled = false;
      guestsOptions[1].disabled = false;
      guestsOptions[2].disabled = false;
      guestsOptions[3].disabled = true;
      guestsInput.value = '3';
    }
    if (roomInput.value === '100') {
      guestsOptions[0].disabled = true;
      guestsOptions[1].disabled = true;
      guestsOptions[2].disabled = true;
      guestsOptions[3].disabled = false;
      guestsInput.value = '0';
    }
  })
}
