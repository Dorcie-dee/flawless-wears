const slides = [
  {
    image: './images/slide1.jpg',
    title: 'Tailored Elegance, Designed for You',
    desc: 'Custom styles for every occasion. Request your outfit today, your design, your size, your story.',
    btnText: 'Order Now',
    btnLink: 'order.html'
  },
  {
    image: './images/slide2.jpg',
    title: 'Your Style, Our Passion',
    desc: 'We bring your vision to life with the perfect fit.',
    btnText: 'Start Customizing',
    btnLink: 'order.html'
  },
  {
    image: './images/slide6.jpg',
    title: 'Fashion Made Personal',
    desc: 'Be bold, be original, be flawless - tailor with us.',
    btnText: 'Get Measured',
    btnLink: 'contact.html'
  }
];

let currentSlide = 0;
const slideEl = document.getElementById('slides-container');
const titleEl = document.getElementById('slide-title');
const descEl = document.getElementById('slide-desc');
const btnEl = document.getElementById('slide-btn');

function animateText() {
  // Remove old animation class
  [titleEl, descEl, btnEl].forEach(el => {
    el.classList.remove('animate-slide-up');
    void el.offsetWidth; // Reflow trick to restart animation
    el.classList.add('animate-slide-up');
  });
}

function showSlide(index) {
  const { image, title, desc, btnText, btnLink } = slides[index];

  // Step 1: Set background image first
  slideEl.style.backgroundImage = `url('${image}')`;

  // Step 2: Wait a tiny bit (e.g. 100ms), then change text and animate
  setTimeout(() => {
    titleEl.textContent = title;
    descEl.textContent = desc;
    btnEl.textContent = btnText;
    btnEl.href = btnLink;
    animateText();
  }, 100); 
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Attach event listeners
document.getElementById('nextSlide').addEventListener('click', nextSlide);
document.getElementById('prevSlide').addEventListener('click', prevSlide);

// Auto-slide every 5s
setInterval(nextSlide, 7000);

// Start with first slide
showSlide(currentSlide);