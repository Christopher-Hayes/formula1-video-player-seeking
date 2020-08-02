// @summary Get video player (window.nbcsplayer)
function getPlayer() {
  return window.wrappedJSObject.nbcsplayer;
}

// @summary Rewrap object following recommendede best practice here: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts#comment_text_38
function rewrapPlayer() {
  XPCNativeWrapper(getPlayer());
}

// @summary Call video player seek event
// @param {string} seekAmt - Number of seconds to seek
function seek(seekAmt) {
  let player = getPlayer();
  player.api.seek(player.api.currentTime + seekAmt);
  rewrapPlayer();
}

// On left arrow or right arrow key up, seek video 10 seconds in either direction
window.addEventListener('keyup', e => {
  switch (e.key) {
    case 'ArrowLeft':   seek(-10);  break;
    case 'ArrowRight':  seek(10);   break;
  }
});

