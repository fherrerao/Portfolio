const mobileMenu = document.querySelector('.mobile-header');
const links = document.querySelector('.desktop-header');


mobileMenu.addEventListener('click', () => {  
  links.classList.toggle('activated');
  
  
});
