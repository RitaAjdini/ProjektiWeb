const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");



hamburger.addEventListener("click",()=>{
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
})



document.querySelectorAll(".nav-link").forEach(n=>n.
    addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

//slider 


var vargu=[
   
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



  
  var index=0;
  var koha=2500;
  
  
  function krijoSlider(){
  document.getElementById('imazhi').src=vargu[index];
  index++;
  if(index==vargu.length){
  index=0;
  }
  
  setTimeout("krijoSlider()",koha);
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
  
//lojerave slider
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides2 = document.querySelectorAll('.slide2');

let currentSlide2 = 0;

// Hide all but the first four slides
for (let i = 4; i < slides2.length; i++) {
  slides2[i].style.display = 'none';
}

prevButton.addEventListener('click', () => {
  // Hide the current set of four slides
  for (let i = currentSlide2; i < currentSlide2 + 4; i++) {
    slides2[i].style.display = 'none';
  }
  // Decrement the current slide index and update the display of the previous set of four slides
  currentSlide2 = (currentSlide2 - 4 + slides2.length) % slides2.length;
  for (let i = currentSlide2; i < currentSlide2 + 4; i++) {
    slides2[i].style.display = 'block';
  }
});

nextButton.addEventListener('click', () => {
  // Hide the current set of four slides
  for (let i = currentSlide2; i < currentSlide2 + 4; i++) {
    slides2[i].style.display = 'none';
  }
  // Increment the current slide index
  currentSlide2 = (currentSlide2 + 4) % slides2.length;
  // If there are fewer than four slides remaining, show the remaining slides and then show the first four slides again
  if (currentSlide2 + 4 > slides2.length) {
    let remainingSlides = currentSlide2 + 4 - slides2.length;
    for (let i = currentSlide2; i < slides2.length; i++) {
      slides2[i].style.display = 'block';
    }
    for (let i = 0; i < 4; i++) {
      slides2[i].style.display = 'block';
    }
  }
  // Update the display of the next set of four slides
  for (let i = currentSlide2; i < currentSlide2 + 4; i++) {
    slides2[i].style.display = 'block';
  }
});
