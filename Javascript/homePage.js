const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");



hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})



document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

//slider 


var vargu = [

  'Images/MainNavBar/Image1.webp',
  'Images/MainNavBar/Image2.jpg',
  'Images/MainNavBar/Image3.jpg',
  'Images/MainNavBar/Image4.webp',
  'Images/MainNavBar/Image5.webp',
  'Images/MainNavBar/Image6.webp',
  'Images/MainNavBar/Image7.webp',
  'Images/MainNavBar/Image8.webp',
  'Images/MainNavBar/Image9.jpg',
  'Images/MainNavBar/Image10.jpg',

];




var index = 0;
var koha = 2500;


function krijoSlider() {
  document.getElementById('imazhi').src = vargu[index];
  index++;
  if (index == vargu.length) {
    index = 0;
  }

  setTimeout("krijoSlider()", koha);
}

krijoSlider();

//teksti me slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2500);

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}



/////////////////////////////////
//Slider2 code per lojna On Sale


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
}) 