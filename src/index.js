import './styles.css';

import menuTemplate from './templates/menu-items.hbs';
import menu from './menu.json';

const menuEl = document.querySelector('.js-menu');
const menuMarkup = menuTemplate(menu);

menuEl.insertAdjacentHTML('beforeend', menuMarkup);
