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

// Entries
const titles = [];
document.querySelectorAll('.text-1').forEach((item) => {
  titles.push(item.textContent);
});

const descriptions = [];
document.querySelectorAll('.description').forEach((item) => {
  descriptions.push(item.textContent);
});

const technologies = [];
const techs = [];
document.querySelectorAll('.techs').forEach((item) => {
  techs.push(item.textContent);
});

technologies.push(techs.slice(0, 4));
technologies.push(techs.slice(4, 7));
technologies.push(techs.slice(7, 10));
technologies.push(techs.slice(10, 13));
technologies.push(techs.slice(13, 16));
technologies.push(techs.slice(16, 19));
technologies.push(techs.slice(19, 22));

const images = [
  'img/imgplaceholder0.png',
  'img/imgplaceholder1.png',
  'img/imgplaceholder1.png',
  'img/imgplaceholder1.png',
  'img/imgplaceholder1.png',
  'img/imgplaceholder1.png',
  'img/imgplaceholder1.png',
];

const parentModal = document.createElement('DIV');
parentModal.classList.add('parent-modal');

const modalContainer = document.createElement('DIV');
modalContainer.classList.add('modal-container');

const closeButton = document.createElement('IMG');
closeButton.classList.add('close-button');
closeButton.src = 'img/close.svg';
closeButton.addEventListener('click', () => {
  modalContainer.classList.toggle('activated');
  parentModal.classList.toggle('activated');
});

// Creating the modal window first project

const parentModalH = document.querySelector('.projects');
parentModalH.appendChild(parentModal);

const headerContainer = document.createElement('DIV');
headerContainer.classList.add('header-container');

const title = document.createElement('H2');
title.classList.add('title-modal');

const techsContainer = document.createElement('UL');
techsContainer.classList.add('techs-container');
techsContainer.id = 'techs-container';

const techs1 = document.createElement('LI');
techs1.classList.add('techs');

const techs2 = document.createElement('LI');
techs2.classList.add('techs');

const techs3 = document.createElement('LI');
techs3.classList.add('techs');

const mainContainer = document.createElement('DIV');
mainContainer.classList.add('main-container');

const imageModal = document.createElement('IMG');
imageModal.classList.add('img-modal');

const paragraphContainer = document.createElement('DIV');
paragraphContainer.classList.add('paragraph-container');

const paragraph = document.createElement('P');
paragraph.classList.add('paragraph');

const buttonContainer = document.createElement('DIV');
buttonContainer.classList.add('button-container');

const buttonLive = document.createElement('A');
buttonLive.classList.add('button-project');
buttonLive.textContent = 'See Live';

const buttonSource = document.createElement('A');
buttonSource.classList.add('button-project');
buttonSource.textContent = 'See Source';

const modalContainerH = document.querySelector('.parent-modal');
modalContainerH.appendChild(modalContainer);

const headerContainerH = document.querySelector('.modal-container');
headerContainerH.appendChild(headerContainer);

const titleH = document.querySelector('.header-container');
titleH.appendChild(title);

const techsContainerH = document.querySelector('.modal-container');
techsContainerH.appendChild(techsContainer);

const techs1H = document.querySelector('#techs-container');
techs1H.appendChild(techs1);

const techs2H = document.querySelector('#techs-container');
techs2H.appendChild(techs2);

const techs3H = document.querySelector('#techs-container');
techs3H.appendChild(techs3);

const mainContainerH = document.querySelector('.modal-container');
mainContainerH.appendChild(mainContainer);

const imageModalH = document.querySelector('.main-container');
imageModalH.appendChild(imageModal);

const paragraphContainerH = document.querySelector('.main-container');
paragraphContainerH.appendChild(paragraphContainer);

const paragraphH = document.querySelector('.paragraph-container');
paragraphH.appendChild(paragraph);

const buttonContainerH = document.querySelector('.paragraph-container');
buttonContainerH.appendChild(buttonContainer);

const buttonLiveH = document.querySelector('.button-container');
buttonLiveH.appendChild(buttonLive);

const buttonSourceH = document.querySelector('.button-container');
buttonSourceH.appendChild(buttonSource);

const closeButtonH = document.querySelector('.header-container');
closeButtonH.appendChild(closeButton);

const pages = {};
for (let i = 0; i < titles.length; i += 1) {
  pages[`project${i}`] = {};
  pages[`project${i}`].title = titles[i];
  pages[`project${i}`].description = descriptions[i];
  pages[`project${i}`].technologies = technologies[i];
  pages[`project${i}`].image = images[i];
  pages[`project${i}`].live = 'https://fherrerao.github.io/Portfolio/';
  pages[`project${i}`].source = 'https://github.com/fherrerao/Portfolio';
}

function modals(e) {
  modalContainer.classList.toggle('activated');
  parentModal.classList.toggle('activated');
  title.textContent = pages[e].title;
  [techs1.textContent, techs2.textContent, techs3.textContent] = pages[e].technologies;
  imageModal.src = pages[e].image;
  paragraph.textContent = pages[e].description;
  buttonLive.href = pages[e].live;
  buttonSource.href = pages[e].source;
}

function message() {
  const error = document.createElement('P');
  error.textContent = 'The email should be with lowercase!';
  error.classList.add('error');
  const emailH = document.querySelector('.items-form');
  emailH.appendChild(error);
}

const clickButtonProject2 = document.querySelectorAll('.button-project');
clickButtonProject2.forEach((item) => {
  item.addEventListener('click', (e) => {
    modals(e.target.id);
  });
});

const form = document.querySelector('.form');
const email = document.querySelector('.email');

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    message();
    e.preventDefault();
  }
});