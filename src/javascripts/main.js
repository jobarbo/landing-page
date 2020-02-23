// Add your scripts here


// SCROLL COLOR //
// ======================== //
const body = document.querySelector('body');
const div = document.querySelector('.artists-grid');

function changeBackground() {
  const slideInAt = (window.scrollY + window.innerHeight) - div.offsetHeight;
  const isHalfShown = slideInAt >= div.offsetTop;

  if (isHalfShown) {
    body.classList.add('black-bg');
    body.classList.remove('white-bg');
  } else {
    body.classList.add('white-bg');
    body.classList.remove('black-bg');
  }
}

// Script pour limiter le nb de fois que la fonction changeBackground est déclachée
/* eslint-disable */
function debounce(func, wait, immediate) {
  let timeout;
  return () => {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
/* eslint-enable */

window.addEventListener('scroll', debounce(changeBackground, 20, true));

// ======================== //
// SCROLL COLOR //
