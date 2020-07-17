let mouseCursor = document.querySelector('.cursor');
let Alllink = document.querySelectorAll('a');
let slider = document.querySelector('.swiper-container');
let mouseCursorText = document.querySelector('.cursor__text');

slider.addEventListener('mouseover', () => {
  mouseCursorText.classList.add('cursorText');
});
slider.addEventListener('mouseleave', () => {
  mouseCursorText.classList.remove('cursorText');
});
window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
  if (e.pageX + 10 === window.innerWidth) {
    mouseCursor.classList.add('updateCursorW');

    console.log(e.pageX);
  } else if (e.pageX + 10 < window.innerWidth) {
    mouseCursor.classList.remove('updateCursorW');
  }
  if (e.pageY + 10 === window.innerHeight) {
    mouseCursor.classList.add('updateCursorH');

    console.log(e.pageX);
  } else if (e.pageY + 10 < window.innerHeight) {
    mouseCursor.classList.remove('updateCursorH');
  }
}

Alllink.forEach((link) => {
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('upgrMouse');
    link.classList.add('upgrList');
  });
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('upgrMouse');
    link.classList.remove('upgrList');
  });
});
