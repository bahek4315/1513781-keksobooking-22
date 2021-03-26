'use strict';
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
