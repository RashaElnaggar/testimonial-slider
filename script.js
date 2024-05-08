console.log("javascript is running")
const slider = document.querySelector('.testimonial-slider');
const testimonials = slider.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentTestimonial = 0;

const showTestimonial = (slideIndex) => {
  testimonials.forEach((testimonial, index) => {
    testimonial.classList.remove('center');
    if (index === slideIndex) {
      testimonial.classList.add('center');
    }
  });
};

showTestimonial(currentTestimonial);

const moveTestimonial = (direction) => {
  const testimonialCount = testimonials.length;
  currentTestimonial = (currentTestimonial + testimonialCount + direction) % testimonialCount;
  showTestimonial(currentTestimonial);
};

prevBtn.addEventListener('click', () => moveTestimonial(-1));
nextBtn.addEventListener('click', () => moveTestimonial(1));

//
