const menuActive = document.querySelector('.menu-active');
const navListActive = document.querySelector('.nav-list-active');
const closeActive = document.querySelector('.close-active');

menuActive.addEventListener('click', () => {
   navListActive.classList.add('nav-list-active-show');
});

closeActive.addEventListener('click', () => {
   navListActive.classList.remove('nav-list-active-show');
});

// Theme Mode
const modeBtn = document.getElementById('mode-btn');
const body = document.querySelector('body');

modeBtn.addEventListener('click', () => {
   body.classList.toggle('dark-theme');
   const negativeLogo = document.getElementById('negative-logo');

   if (document.body.classList.contains('dark-theme')) {
      negativeLogo.style.filter = 'invert(100%)';
      document.getElementById("new-text").innerHTML = "Light Mode";
   } else {
      negativeLogo.style.filter = 'brightness(1)';
      document.getElementById("new-text").innerHTML = "Dark Mode";
   }
});

