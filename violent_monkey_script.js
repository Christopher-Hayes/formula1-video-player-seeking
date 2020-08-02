// ==UserScript==
// @name        Add arrow key seeking - formula1.com
// @namespace   Violentmonkey Scripts
// @match       https://f1tv.formula1.com/en/current-season/*/*-formula-1-race
// @grant       none
// @version     1.0
// @author      Chris Hayes
// @description 8/2/2020, 3:32:02 PM
// ==/UserScript==

window.addEventListener('keyup', e => {
  switch (e.key) {
    case 'ArrowLeft':
      window.nbcsplayer.api.seek(window.nbcsplayer.api.currentTime - 10);
      break;
    case 'ArrowRight':
      window.nbcsplayer.api.seek(window.nbcsplayer.api.currentTime + 10);
      break;
  }
});
