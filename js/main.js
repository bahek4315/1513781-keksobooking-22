// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://learn.javascript.ru/number

function generateNumber (min, max, digits) {
  if (min < 0) {
    alert('Min must be not less than 0');
  }
  if (max < min) {
    alert('Max must be more than min');
  }
  return ((Math.random() * (max - min)) + min).toFixed(digits);
}

generateNumber (1.1, 1.2, 5)
