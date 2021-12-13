const mobileMenu = document.querySelector('.mobile-header');
const links = document.querySelectorAll('.menu');

mobileMenu.addEventListener('click', () => {
  links.style.display = 'block';
});
