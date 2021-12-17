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

// object constructor

let names = "Multi Post Stories";
let technologies = ["html", "Bootstrap", "Ruby"];
let description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita."
let image = "img/imgplaceholder0.png";
let live = "https://fherrerao.github.io/Portfolio/";
let source = "https://github.com/fherrerao/Portfolio";

let names2 = "Multi Post Stories";
let technologies2 = ["html", "Bootstrap", "Ruby"];
let description2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita."
let image2 = "img/imgplaceholder1.png";
let live2 = "https://fherrerao.github.io/Portfolio/";
let source2 = "https://github.com/fherrerao/Portfolio";

function Project (names, description, image, technologies, live, source){
  this.names = names;
  this.description = description;
  this.image = image;
  this.technologies = technologies;
  this.live = live;
  this.source = source;
}

let project_1 = new Project(names, description, image, technologies, live, source);
let project_2 = new Project(names2, description2, image2, technologies2, live2, source2);

let cards = [];

cards.push(project_1);
cards.push(project_2);

const myProjects = [project_1, project_2];

const closeButton = document.createElement('IMG');
closeButton.classList.add('close-button');
closeButton.src = 'img/close.svg';
closeButton.addEventListener('click', () => {
  modalContainer.classList.toggle('activated');
});

const clickButtonProject2 = document.querySelectorAll('.button-project');
clickButtonProject2.forEach((item) => {
  item.addEventListener('click', (e) => {
    modals(e.target.id);
  })  
});


//Creating the modal window first project

const modalContainer = document.createElement('DIV');
modalContainer.classList.add('modal-container');

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

const modalContainerH = document.querySelector('.projects');
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

function modals(e) {  
  if(e === "btn-story") {
    modalContainer.classList.toggle('activated');
    title.textContent = project_1.names;
    techs1.textContent = project_1.technologies[0];
    techs2.textContent = project_1.technologies[1];
    techs3.textContent = project_1.technologies[2];
    imageModal.src = project_1.image;
    paragraph.textContent = project_1.description;
    buttonLive.href = project_1.live;
    buttonSource.href = project_1.source;
  }

  else if (e === "btn-project") {
    modalContainer.classList.toggle('activated');
    title.textContent = project_2.names;
    techs1.textContent = project_2.technologies[0];
    techs2.textContent = project_2.technologies[1];
    techs3.textContent = project_2.technologies[2];
    imageModal.src = project_2.image;
    paragraph.textContent = project_2.description;
    buttonLive.href = project_2.live;
    buttonSource.href = project_2.source;
  }
}