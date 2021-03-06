const generateIntegerNumber = (min, max) => {
  if (min < 0) {
    alert('Min must be not less than 0');
  }
  if (max < min) {
    alert('Max must be more than min');
  }
  min = Math.round(min);
  max = Math.round(max);
  return Math.round((Math.random() * (max - min)) + min);
}

const generateNumber = (min, max, digits) => {
  if (min < 0) {
    alert('Min must be not less than 0');
  }
  if (max < min) {
    alert('Max must be more than min');
  }
  return parseFloat(((Math.random() * (max - min)) + min).toFixed(digits));
}

export {generateIntegerNumber, generateNumber}
