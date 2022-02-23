burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav =document.querySelector('.rightNav');


 burger.addEventListener('click', ()=>{
    navbar.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('height-nav-resp');
})
function classToggle() {
    const navbar = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(navbar => navbar.classList.toggle('Navbar__ToggleShow'));
  }
  
  //document.querySelector('.Navbar__Link-toggle')
    //.addEventListener('click', classToggle)