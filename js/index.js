const mobileDropNav = document.querySelector('.drop-menu');
const mobileMenuButton = document.querySelector('#mobile-menu-icon');
mobileMenuButton.addEventListener('click', function(){
  mobileDropNav.classList.toggle('unhide');
});