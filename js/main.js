const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const brand = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Initial menu transition
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    brand.classList.add("show");
    navItems.forEach((item) => {
      item.classList.add("show");
    });
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    brand.classList.remove("show");
    navItems.forEach((item) => {
      item.classList.remove("show");
    });
    showMenu = false;
  }
}

//Img Gallery


const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;
imgs[0].style.opacity = opacity;

imgs.forEach((img) => {
  img.addEventListener("click", imgClick);
});

function imgClick(e){
  imgs.forEach(img=>{
    img.style.opacity = 1
  });

  current.src = e.target.src;
  // Fade in class
  current.classList.add('fade-in');
  setTimeout(()=>
    current.classList.remove('fade-in'), 300
  )

  e.target.style.opacity = opacity;
}