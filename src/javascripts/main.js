// Add your scripts here


// SCROLL COLOR //
// ======================== //
const body = document.querySelector('body');
const grid = document.querySelector('.artists-grid');

function changeBackground() {
  const slideInAt = (window.scrollY + window.innerHeight) - grid.offsetHeight;
  const isHalfShown = slideInAt >= grid.offsetTop;

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

window.addEventListener('scroll', debounce(changeBackground, 1, true));

// ======================== //

// HAMBURGER NAV //
// ======================== //
const menuBtn = document.querySelector('[data-menu]');
const theBody = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  console.log('click');
  theBody.classList.toggle('menu-activated');
  menuBtn.classList.toggle('active');
});
// ======================== //

// PARALLAX SCROLL //
// ======================== //

const picture = document.querySelector('.loud .floating-image');

function onScroll() {
  let startPos;
  const speed = picture.dataset;
  console.log(speed);

  function animateParallax() {
    const fromTop = window.pageYOffset;
    const rect = picture.getBoundingClientRect();
    let scrollDelta = '';
    if ((rect.top - window.innerHeight) <= 0 && rect.bottom > 0) {
      if (startPos === undefined) {
        startPos = fromTop;
      }
    } else {
      startPos = 0;
      return;
    }
    scrollDelta = (fromTop - startPos / 1.25) * 1;
    picture.style.transform = `translateY(${scrollDelta}px)`;
  }
  animateParallax();
  return animateParallax;
}

window.addEventListener('scroll', debounce(onScroll, 1, true));
