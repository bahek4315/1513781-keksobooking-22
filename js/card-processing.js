export const setMinSum = () => {
  let buildingType = document.querySelector('#type');
  let priceInput = document.querySelector('#price');
  //без этого не работает валидация, если ничего не выбирать в теге <select>, те оставить "квартира" по дефолту, решил сделать такой код
  if (buildingType.value === 'flat') {
    priceInput.min = 1000;
    priceInput.placeholder = '>1000'
  }
  buildingType.addEventListener('change', function () {
    if (buildingType.value === 'bungalow') {
      priceInput.min = 0;
      priceInput.placeholder = '>0'
    }
    if (buildingType.value === 'flat') {
      priceInput.min = 1000
      priceInput.placeholder = '>1000'
    }
    if (buildingType.value === 'house') {
      priceInput.min = 5000;
      priceInput.placeholder = '>5000'
    }
    if (buildingType.value === 'palace') {
      priceInput.min = 10000;
      priceInput.placeholder = '>10000'
    }
  })

}

export const timeSync = () => {
  let timeIn = document.querySelector('#timein');
  let timeOut = document.querySelector('#timeout');
  timeIn.addEventListener('change', function (){
    timeOut.value = timeIn.value;
    timeIn.value = timeOut.value;
  })
}
