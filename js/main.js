// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://learn.javascript.ru/number

import {setMinSum, timeSync, guestLimit, setSendButton, setResetButton} from './card-processing.js';
import {disableForm} from './lock.js';
import {createMap} from './map.js';

setMinSum();
timeSync();
guestLimit();
setSendButton();
setResetButton();
disableForm();
createMap();
