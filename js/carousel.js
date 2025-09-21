let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const contents = document.querySelectorAll(".text-content");
const totalSlides = slides.length;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  contents[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % totalSlides;

  slides[currentSlide].classList.add("active");
  setTimeout(() => {
    contents[currentSlide].classList.add("active");
  }, 200);
}

setInterval(nextSlide, 4000);
