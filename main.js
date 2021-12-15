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
let description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
let image = "img/snapshootportfolio.png";
let live = "https://fherrerao.github.io/Portfolio/";
let source = "https://github.com/fherrerao/Portfolio";

function Project (names, description, image, technologies, live, source){
  this.names = names;
  this.description = description;
  this.image = image;
  this.technologies = technologies;
  this.live = live;
  this.source = source;
}

let project01 = new Project(names, description, image, technologies, live, source);
let project02 = new Project(names, description, image, technologies, live, source);
let project03 = new Project(names, description, image, technologies, live, source);
let project04 = new Project(names, description, image, technologies, live, source);
let project05 = new Project(names, description, image, technologies, live, source);
let project06 = new Project(names, description, image, technologies, live, source);

const myProjects = [project01, project02, project03, project04, project05, project06];

// Creating elements in HTML

const divTag = document.createElement('DIV');
divTag.classList.add('projects-container');

const h2Tag = document.createElement('H2');
h2Tag.textContent = project01.names;

const pTag = document.createElement('P');
pTag.textContent = project01.description;

const ulTag = document.createElement('UL');
ulTag.classList.add('techs-container-skills');

const liTag1 = document.createElement('LI');
liTag1.classList.add('techs');
liTag1.textContent = project01.technologies[0];

const liTag2 = document.createElement('LI');
liTag2.classList.add('techs');
liTag2.textContent = project01.technologies[1];

const liTag3 = document.createElement('LI');
liTag3.classList.add('techs');
liTag3.textContent = project01.technologies[2];

const aTag = document.createElement('A');
aTag.classList.add('button-project');
aTag.textContent = 'See project';



const divH = document.querySelector('.projects');
divH.appendChild(divTag);

const h2H = document.querySelector('.projects-container');
h2H.appendChild(h2Tag);

const pH = document.querySelector('.projects-container');
pH.appendChild(pTag);

const ulH = document.querySelector('.projects-container');
ulH.appendChild(ulTag);

const liH1 = document.querySelector('.techs-container-skills');
liH1.appendChild(liTag1);

const liH2 = document.querySelector('.techs-container-skills');
liH2.appendChild(liTag2);

const liH3 = document.querySelector('.techs-container-skills');
liH3.appendChild(liTag3);

const aH = document.querySelector('.projects-container');
aH.appendChild(aTag);