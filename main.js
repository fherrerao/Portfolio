const mobileMenu = document.querySelector('.mobile-header');
const links = document.querySelector('.desktop-header');
const hamb = document.querySelectorAll('.hamb');
const nameH = document.querySelector('.name');
const header = document.querySelector('.header');
const hamb1 = document.querySelector('.link');
const hamb2 = document.querySelector('.link-2');
const hamb3 = document.querySelector('.link-3');

mobileMenu.addEventListener('click', () => {
  links.classList.toggle('activated');
  hamb.forEach((child) => {
    child.classList.toggle('activated');
  });
  nameH.classList.toggle('activated');
  header.classList.toggle('activated');
});

hamb1.addEventListener('click', () => {
  links.classList.toggle('activated');
  header.classList.toggle('activated');
  nameH.classList.toggle('activated');
  hamb.forEach((child) => {
    child.classList.toggle('activated');
  });
});

hamb2.addEventListener('click', () => {
  links.classList.toggle('activated');
  header.classList.toggle('activated');
  nameH.classList.toggle('activated');
  hamb.forEach((child) => {
    child.classList.toggle('activated');
  });
});

hamb3.addEventListener('click', () => {
  links.classList.toggle('activated');
  header.classList.toggle('activated');
  nameH.classList.toggle('activated');
  hamb.forEach((child) => {
    child.classList.toggle('activated');
  });
});


let projects = {
  name: "Art data",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  image:"img/imgplaceholder",
  technologies: "Javascript, Html, Css"  
}