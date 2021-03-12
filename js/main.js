// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://learn.javascript.ru/number
import {setMinSum, timeSync, guestLimit} from './card-processing.js';
import {disableForm} from './lock.js'
import {createMap} from './map.js'

setMinSum();
timeSync();
guestLimit();
disableForm();
createMap();
