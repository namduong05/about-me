// evaluate
let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
});
currentSlide = index;
}

function nextSlide() {
let next = (currentSlide + 1) % testimonials.length;
showSlide(next);
}

// setInterval(nextSlide, 5000);