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
    'Images/MainNavBar/Image3.jpg',
    'Images/MainNavBar/Image5.webp',
    'Images/MainNavBar/Image6.webp',
    'Images/MainNavBar/Image7.webp',
    'Images/MainNavBar/Image8.webp',
    'Images/MainNavBar/Image9.jpg',
    'Images/MainNavBar/Image10.jpg',
    
  ];



  
  var index=0;
  var koha=2800;
  
  
  function krijoSlider(){
  document.getElementById('imazhi').src=vargu[index];
  index++;
  if(index==vargu.length){
  index=0;
  }
  
  setTimeout("krijoSlider()",koha);
  }

  krijoSlider();
  