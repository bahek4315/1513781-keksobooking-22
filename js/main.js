import {setMinSum, synchronizeTime, validateGuestsCapacity, setSendButton, setResetButton} from './card-processing.js';
import {disableForm} from './lock.js';
import {createMap} from './map.js';

setMinSum();
synchronizeTime();
validateGuestsCapacity();
setSendButton();
setResetButton();
disableForm();
createMap();
