// подключение стилей

import './styles.css';

// генерация разметки

import menuTemplate from './templates/menu-items.hbs';
import menu from './menu.json';

const menuEl = document.querySelector('.js-menu');
const menuMarkup = menuTemplate(menu);

menuEl.insertAdjacentHTML('beforeend', menuMarkup);

// переключение темы

const bodyEl = document.querySelector('body');
const themeSwitchEl = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const storageKeys = {
  STORAGE_THEME_KEY: 'theme',
  STORAGE_SWITCH_KEY: 'theme-switch',
};

const savedTheme = localStorage.getItem(storageKeys.STORAGE_THEME_KEY);

if (savedTheme) {
  bodyEl.classList.add(localStorage.getItem(storageKeys.STORAGE_THEME_KEY));
  themeSwitchEl.checked = JSON.parse(
    localStorage.getItem(storageKeys.STORAGE_SWITCH_KEY),
  );
}

themeSwitchEl.addEventListener('change', onThemeSwitch);

function onThemeSwitch(e) {
  bodyEl.classList.remove(...bodyEl.classList);
  if (e.target.checked) {
    bodyEl.classList.add(Theme.DARK);
    localStorage.setItem(storageKeys.STORAGE_THEME_KEY, Theme.DARK);
    localStorage.setItem(storageKeys.STORAGE_SWITCH_KEY, true);
  } else {
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem(storageKeys.STORAGE_THEME_KEY, Theme.LIGHT);
    localStorage.setItem(storageKeys.STORAGE_SWITCH_KEY, false);
  }
}
