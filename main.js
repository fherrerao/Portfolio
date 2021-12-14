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

function Project (name, description, image, technologies){
  this.name = name;
  this.description = description;
  this.image = image;
  this.technologies = technologies;  
}

let project01 = new Project(names, description, image, technologies);
let project02 = new Project(names, description, image, technologies);
let project03 = new Project(names, description, image, technologies);
let project04 = new Project(names, description, image, technologies);
let project05 = new Project(names, description, image, technologies);
let project06 = new Project(names, description, image, technologies);


let names = "Art data";
let technologies = ["Javascript", "Html", "Css"];
let description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
let image = "img/imgplaceholder.png";

const myProjects = [project01, project02, project03, project04, project05, project06];
for (let i = 0; i <= myProjects.length; i++) {
document.querySelector('.projects').innerHTML = myProjects.map(project => {
  return `<div class="project">
  <div class="project-image">
    <img src="${project.image}" alt="${project.name}">
  </div>
  <div class="project-info">
    <h2>${project.name}</h2>
    <p>${project.description}</p>
    <div class="project-tech">
      <h3>Technologies used:</h3>
      <ul>
        ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
      </ul>
    </div>
  </div>
</div>`
})
.join('');};