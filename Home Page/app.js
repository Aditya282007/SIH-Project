//Fade btn
const arrow =document.getElementById("arrow");

window.addEventListener("scroll",() => {
    let value = window.scrollY;
    if (value <= 5) {
        arrow.classList.toggle('fade-in');
        arrow.classList.toggle('fade-out');
    }
})

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

