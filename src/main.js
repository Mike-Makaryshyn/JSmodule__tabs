'use strict';

import tabs from './tabs';

document.addEventListener('DOMContentLoaded',() => {

   tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');

});