const mobileMenu = document.querySelector('.mobile-header');
const links = document.querySelector('.desktop-header');
const hamb = document.querySelectorAll('.hamb');
const nameH = document.querySelector('.name');
const header = document.querySelector('.header');


mobileMenu.addEventListener('click', () => {  
  links.classList.toggle('activated');
  hamb.forEach(child => {
      child.classList.toggle('activated')
    })
  
    nameH.classList.toggle('activated')
  
    header.classList.toggle('activated')
});
  








