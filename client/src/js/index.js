import { Workbox } from 'workbox-window';
// imports the JS files
import Editor from './editor';
import './database';
import './header'
// imports the CSS files
import '../css/style.css';
// imports the logo and sets the image source and withd
import logoImage from '../images/logo.png';
document.getElementById('logoImage').src = logoImage;
document.getElementById('logoImage').setAttribute("width", "96");

// loads the editor or spinner if the editor is not installed
const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported and registers workbox service worker
if ('serviceWorker' in navigator) {
  const workboxSW = new Workbox('./src-sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}