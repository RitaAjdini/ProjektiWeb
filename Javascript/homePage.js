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

//slider i dyte
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides2.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides2[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
