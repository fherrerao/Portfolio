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

function message() {
  const error = document.createElement('P');
  error.textContent = 'The email should be with lowercase!';
  error.classList.add('error');
  const emailH = document.querySelector('.items-form');
  emailH.appendChild(error);
}

const form = document.querySelector('.form');
const email = document.querySelector('.email');

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    message();
    e.preventDefault();
  }
});