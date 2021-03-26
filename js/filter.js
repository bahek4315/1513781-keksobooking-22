'use strict';
/* global _:readonly */
const filtersForm = document.querySelector('.map__filters');
const filterType = filtersForm.querySelector('#housing-type');
const filterPrice = filtersForm.querySelector('#housing-price');
const filterRooms = filtersForm.querySelector('#housing-rooms');
const filterGuests = filtersForm.querySelector('#housing-guests');

const checkType = ({offer}) => {
  return filterType.value === offer.type || filterType.value === 'any';
};

const checkPrice = ({offer}) => {
  switch (filterPrice.value) {
    case 'any': return true;
    case 'middle': return offer.price > 10000 && offer.price <= 50000;
    case 'low': return offer.price <= 10000;
    case 'high': return offer.price > 50000;
    default: return false;
  }
};

const checkRooms = ({offer}) => {
  return parseInt(filterRooms.value) === offer.rooms || filterRooms.value === 'any';
};

const checkGuests = ({offer}) => {
  return parseInt(filterGuests.value) === offer.guests || filterGuests.value === 'any';
};

const checkFeatures = ({offer}) => {
  const checkedFeatures = Array.from(filtersForm.querySelectorAll('.map__checkbox:checked'));

  return checkedFeatures.every((feature) => {
    return offer.features.includes(feature.value);
  });
};

const checkEveryFilter = (offer) => {
  const checks = [
    checkType,
    checkPrice,
    checkRooms,
    checkGuests,
    checkFeatures,
  ];

  return checks.every((check) => {
    return check(offer);
  });
};

export const filterOffersDefault = (offers) => {
  return offers.slice(0, 10);
}

export const setEventListenerFilter = (onFiltersChange) => {
  filtersForm.addEventListener('change', _.debounce(onFiltersChange, 500));
}

export const filterOffers = (offers) => {
  return offers.filter(checkEveryFilter).slice(0, 10);
}
