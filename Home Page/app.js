// Slider
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
  if (index === 0) {
    slide.classList.add('active');
  }
});

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
  });
}

// Call nextSlide every 5 seconds
setInterval(nextSlide, 5000);

// Scroll reveal
const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function(){
    for (let i = 0; i < revealElements.length; i++){
        const isElementOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight;

        if (isElementOnScreen){
            revealElements[i].classList.add("revealed");
        }
    }
}

window.addEventListener("scroll",scrollReveal);
window.addEventListener("load",scrollReveal);

// Mails

