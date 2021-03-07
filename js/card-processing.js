export const setMinSum = () => {
  let buildingType = document.querySelector('#type');
  let priceInput = document.querySelector('#price');
  //без этого не работает валидация, если ничего не выбирать в теге <select>, те оставить "квартира" по дефолту, решил сделать такой код
  if (buildingType.selectedIndex === 1) {
    priceInput.min = 1000;
  }
  buildingType.addEventListener('change', function () {
    if (buildingType.selectedIndex === 0) {
      priceInput.min = 0;
    }
    if (buildingType.selectedIndex === 1) {
      priceInput.min = 1000
    }
    if (buildingType.selectedIndex === 2) {
      priceInput.min = 5000;
    }
    if (buildingType.selectedIndex === 3) {
      priceInput.min = 10000;
    }
  })

}

export const timeSync = () => {
  let timeIn = document.querySelector('#timein');
  let timeOut = document.querySelector('#timeout');
  timeIn.addEventListener('change', function (){
    if (timeIn.selectedIndex === 0) {
      timeOut.selectedIndex = 0
    }
    if (timeIn.selectedIndex === 1) {
      timeOut.selectedIndex = 1
    }
    if (timeIn.selectedIndex === 2) {
      timeOut.selectedIndex = 2
    }
  })

  timeOut.addEventListener('change', function (){
    if (timeOut.selectedIndex === 0) {
      timeIn.selectedIndex = 0
    }
    if (timeOut.selectedIndex === 1) {
      timeIn.selectedIndex = 1
    }
    if (timeOut.selectedIndex === 2) {
      timeIn.selectedIndex = 2
    }
  })
}
