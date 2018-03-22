// back-end logic:
// function to animate rects
function animateMenu (rects) {
  rects.forEach(function(rect, index) {
    rect.classList.toggle('menu__rect--' + (index + 1));
  });
}

// front-end logic:
// menu svg
const menu = document.querySelector('.menu');

// rects
const rects = document.querySelectorAll('.menu__rect');

// responsive-menu
const responsiveMenu = document.querySelector('.responsive-menu');

// click event listener on menu svg
menu.addEventListener('click', function () {
  // animate responsive-menu and rects
  responsiveMenu.classList.toggle('menu-open');
  animateMenu(rects);
});
