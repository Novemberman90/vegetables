require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import {initWow} from "./modules/wow-mode.js";
import {initMenu} from "./modules/menu.js";
import {scrollNavigation} from "./modules/scrollNavigation.js";
import {data} from "../db.js";
import {createCard} from "./modules/productCards.js";
import {modalController} from "./modules/modal.js"
import {initSwiper} from "./modules/swiper.js";

window.addEventListener('DOMContentLoaded', ()=>{

  const { closeMenu, menuList, menuBtn} = initMenu(); // Получаем `closeMenu и menuList`
  
  
  initWow();
  initSwiper();
  scrollNavigation(closeMenu);
  modalController(menuList, menuBtn);
  createCard(data.cards);  
});