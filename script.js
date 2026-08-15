
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


let slideIndex = 0;
let slideInterval;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot'); 

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        slides[i].style.display = "none"; 
    }

    
    if (slides[slideIndex]) {
        slides[slideIndex].classList.add('active');
        slides[slideIndex].style.display = "flex";
    }
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
    resetInterval();
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
    resetInterval();
}

function startInterval() {
    slideInterval = setInterval(nextSlide, 5000); 
}

function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
}


function openTab(evt, tabName) {
    let tabContents = document.getElementsByClassName("tab-body");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("active");
    }

    let tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}


document.addEventListener("DOMContentLoaded", () => {
    if (slides.length > 0) {
        showSlide(slideIndex);
        startInterval();
    }
});