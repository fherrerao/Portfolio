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

let project01 = new Project(names, description, image, technologies, live, source);
let project02 = new Project(names2, description2, image2, technologies2, live2, source2);

let cards = [];

cards.push(project01);
cards.push(project02);



const myProjects = [project01, project02];

//Creating the modal window first project



const modalContainer = document.createElement('DIV');
modalContainer.classList.add('modal-container');

const headerContainer = document.createElement('DIV');
headerContainer.classList.add('header-container');

const title = document.createElement('H2');
title.classList.add('title-modal');
title.textContent = project01.names;

const closeButton = document.createElement('IMG');
closeButton.classList.add('close-button');
closeButton.src = 'img/close.svg';

const techsContainer = document.createElement('UL');
techsContainer.classList.add('techs-container');
techsContainer.id = 'techs-container';

const techs1 = document.createElement('LI');
techs1.classList.add('techs');
techs1.textContent = project01.technologies[0];

const techs2 = document.createElement('LI');
techs2.classList.add('techs');
techs2.textContent = project01.technologies[1];

const techs3 = document.createElement('LI');
techs3.classList.add('techs');
techs3.textContent = project01.technologies[2];

const mainContainer = document.createElement('DIV');
mainContainer.classList.add('main-container');



const imageModal = document.createElement('IMG');
imageModal.classList.add('img-modal');
imageModal.src = project01.image;

const paragraphContainer = document.createElement('DIV');
paragraphContainer.classList.add('paragraph-container');

const paragraph = document.createElement('P');
paragraph.classList.add('paragraph');
paragraph.textContent = project01.description;

const buttonContainer = document.createElement('DIV');
buttonContainer.classList.add('button-container');

const buttonLive = document.createElement('A');
buttonLive.classList.add('button-project');
buttonLive.textContent = 'See Live';
buttonLive.href = project01.live;

const buttonSource = document.createElement('A');
buttonSource.classList.add('button-project');
buttonSource.textContent = 'See Source';
buttonSource.href = project01.source;




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

//Creating the modal window second project

// const modalContainer2 = document.createElement('DIV');
// modalContainer2.classList.add('modal-container');

// const headerContainer2 = document.createElement('DIV');
// headerContainer2.classList.add('header-container');

// const title2 = document.createElement('H2');
// title2.classList.add('title-modal');
// title2.textContent = project02.names;

// const closeButton2 = document.createElement('IMG');
// closeButton2.classList.add('close-button');
// closeButton2.src = 'img/close.svg';

// const techsContainer2 = document.createElement('UL');
// techsContainer2.classList.add('techs-container');
// techsContainer2.id = 'techs-container';

// const techs12 = document.createElement('LI');
// techs12.classList.add('techs');
// techs12.textContent = project02.technologies[0];

// const techs22 = document.createElement('LI');
// techs22.classList.add('techs');
// techs22.textContent = project02.technologies[1];

// const techs32 = document.createElement('LI');
// techs32.classList.add('techs');
// techs32.textContent = project02.technologies[2];

// const mainContainer2 = document.createElement('DIV');
// mainContainer2.classList.add('main-container');

// const imageModal2 = document.createElement('IMG');
// imageModal2.classList.add('img-modal');
// imageModal2.src = project02.image;

// const paragraphContainer2 = document.createElement('DIV');
// paragraphContainer2.classList.add('paragraph-container');

// const paragraph2 = document.createElement('P');
// paragraph2.classList.add('paragraph');
// paragraph2.textContent = project02.description;

// const buttonContainer2 = document.createElement('DIV');
// buttonContainer2.classList.add('button-container');

// const buttonLive2 = document.createElement('A');
// buttonLive2.classList.add('button-project');
// buttonLive2.textContent = 'See Live';
// buttonLive2.href = project02.live;

// const buttonSource2 = document.createElement('A');
// buttonSource2.classList.add('button-project');
// buttonSource2.textContent = 'See Source';
// buttonSource2.href = project02.source;




// const modalContainerH2 = document.querySelector('.projects');
// modalContainerH2.appendChild(modalContainer2);

// const headerContainerH2 = document.querySelector('.modal-container');
// headerContainerH2.appendChild(headerContainer2);

// const titleH2 = document.querySelector('.header-container');
// titleH2.appendChild(title2);

// const techsContainerH2 = document.querySelector('.modal-container');
// techsContainerH2.appendChild(techsContainer2);

// const techs1H2 = document.querySelector('#techs-container');
// techs1H2.appendChild(techs12);

// const techs2H2 = document.querySelector('#techs-container');
// techs2H2.appendChild(techs22);

// const techs3H2 = document.querySelector('#techs-container');
// techs3H2.appendChild(techs32);

// const mainContainerH2 = document.querySelector('.modal-container');
// mainContainerH2.appendChild(mainContainer2);

// const imageModalH2 = document.querySelector('.main-container');
// imageModalH2.appendChild(imageModal2);

// const paragraphContainerH2 = document.querySelector('.main-container');
// paragraphContainerH2.appendChild(paragraphContainer2);

// const paragraphH2 = document.querySelector('.paragraph-container');
// paragraphH2.appendChild(paragraph2);

// const buttonContainerH2 = document.querySelector('.paragraph-container');
// buttonContainerH2.appendChild(buttonContainer2);

// const buttonLiveH2 = document.querySelector('.button-container');
// buttonLiveH2.appendChild(buttonLive2);

// const buttonSourceH2 = document.querySelector('.button-container');
// buttonSourceH2.appendChild(buttonSource2);

// const closeButtonH2 = document.querySelector('.header-container');
// closeButtonH2.appendChild(closeButton2);



const clickButtonProject = document.querySelector('.button');
clickButtonProject.addEventListener('click', () => {  
    modalContainer.classList.toggle('activated');  
});

console.log(clickButtonProject)

const clickButtonProject2 = document.querySelector('.button-project');
clickButtonProject2.addEventListener('click', () => {  
    modalContainer.classList.toggle('activated');
});

closeButton.addEventListener('click', () => {
  modalContainer.classList.toggle('activated');
});
