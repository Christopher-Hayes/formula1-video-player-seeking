// Code needed for seeking
var actualCode = `
function seek(seekAmt) {
  window.nbcsplayer.api.seek(window.nbcsplayer.api.currentTime + seekAmt);
}
window.addEventListener('keyup', e => {
  switch (e.key) {
    case 'ArrowLeft':   seek(-10);  break;
    case 'ArrowRight':  seek(10);   break;
  }
});
`;

// Inject code into page - follows method 2 described here: https://stackoverflow.com/a/9517879/2096769
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();
