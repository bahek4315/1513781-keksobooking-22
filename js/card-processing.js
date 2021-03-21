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
  guestsInput.innerHTML = '<option value="1">для 1 гостя</option>';

  roomInput.addEventListener('change', function () {
    const roomCapacity = {
      100: '<option value="0">не для гостей</option>',
      1: '<option value="1">для 1 гостя</option>',
      2: '<option value="2">для 2 гостей</option> <option value="1"> для 1 гостя</option>',
      3: '<option value="3">для 3 гостей</option> <option value="2">для 2 гостей</option> <option value="1">для 1 гостя</option>',
    }
    guestsInput.innerHTML = roomCapacity[roomInput.value];
  })
}
