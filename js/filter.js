const filterInput = document.querySelector('#housing-type');

export const setEventListenerFilter = (onFiltersChange) => {
  filterInput.addEventListener('change', onFiltersChange);
}

export const filterOffers = (offers) => {
  const newArray = [];
  if (filterInput.value === 'any') {
    newArray.push(...offers);
  } else {
    for (let i = 0; i < offers.length; i++) {
      if (offers[i].offer.type === filterInput.value) {
        newArray.push(offers[i]);
      }
    }
  }

  return newArray.slice(0, 10);
}
