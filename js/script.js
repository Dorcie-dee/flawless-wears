// hamburger menu for small screens
const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

//header turns transluscent as i scroll
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('bg-white/80', 'backdrop-blur-md');
    header.classList.remove('bg-white');
  } else {
    header.classList.remove('bg-white/80', 'backdrop-blur-md');
    header.classList.add('bg-white');
  }
});



document.addEventListener('DOMContentLoaded', function () {
  // 1. Animate testimonial cards on scroll
  const testimonialCards = document.querySelectorAll('.testimonial-card');

  const animateCards = () => {
    testimonialCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.transition = 'all 0.5s ease-out';
        card.style.transform = 'translateY(0)';
        card.style.opacity = '1';
      }, 150 * index);
    });
  };

  // Initially hide cards
  testimonialCards.forEach(card => {
    card.style.transform = 'translateY(20px)';
    card.style.opacity = '0';
  });

  // 2. Create animated fabric pattern background
  const fabricPattern = document.getElementById('fabric-pattern');
  if (fabricPattern) {
    // This would be replaced with an actual African fabric pattern SVG in production
    fabricPattern.innerHTML = `
      <svg width="100%" height="100%" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="100%" height="100%" fill="url(#fabric)"></rect>
        <pattern id="fabric" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2" fill="currentColor"></circle>
          <circle cx="40" cy="40" r="2" fill="currentColor"></circle>
        </pattern>
      </svg>
    `;
  }

  // 3. Counter animation for stats
  const counters = document.querySelectorAll('.stats-counter [data-target]');
  const speed = 200;

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace('%', '');
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment) + (counter.innerText.includes('%') ? '%' : '');
        setTimeout(animateCounters, 1);
      } else {
        counter.innerText = target + (counter.innerText.includes('%') ? '%' : '');
      }
    });
  };

  // 4. Intersection Observer to trigger animations when scrolled to
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.id === 'testimonial-grid') {
          animateCards();
        } else if (entry.target.id === 'stats-section') {
          animateCounters();
        }
      }
    });
  }, { threshold: 0.1 });

  observer.observe(document.getElementById('testimonial-grid'));
  observer.observe(document.getElementById('stats-section'));

  // 5. Hover effects for testimonial avatars
  const avatars = document.querySelectorAll('.testimonial-avatar');
  avatars.forEach(avatar => {
    avatar.addEventListener('mouseenter', () => {
      avatar.style.transform = 'scale(1.1) rotate(5deg)';
      avatar.style.transition = 'all 0.3s ease';
    });
    avatar.addEventListener('mouseleave', () => {
      avatar.style.transform = 'scale(1) rotate(0)';
    });
  });
});



//thank you modal-order form
document.addEventListener('DOMContentLoaded', function() {
  // Get elements with null checks
  const form = document.querySelector('form');
  const modal = document.getElementById('thankYouModal');
  const closeBtn = document.getElementById('closeModal');

  // Only proceed if all elements exist
  if (!form || !modal || !closeBtn) {
    console.error('One or more required elements not found');
    return;
  }

  // Form submission handler
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show modal if it exists
    modal.classList.remove('hidden');
    
    // Reset form
    this.reset();
  });

  // Close modal when clicking close button
  closeBtn.addEventListener('click', function() {
    modal.classList.add('hidden');
  });

  // Close when clicking outside modal content
  modal.addEventListener('click', function(e) {
    if (e.target === this) {  // Checks if clicked directly on modal background
      this.classList.add('hidden');
    }
  });
});



//services smooth effects
document.addEventListener('DOMContentLoaded', function () {
  const servicesSection = document.getElementById('services-section');
  const catalogue = document.getElementById('services-catalogue');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        catalogue.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(servicesSection);
});


//login interactivities
// function selectOption(type) {
//   // Update visual selection
//   document.getElementById('userOption').classList.remove('active-option');
//   document.getElementById('adminOption').classList.remove('active-option');
//   document.getElementById(`${type}Option`).classList.add('active-option');

//   // Switch form fields
//   document.getElementById('userFields').classList.toggle('hidden', type !== 'user');
//   document.getElementById('adminFields').classList.toggle('hidden', type !== 'admin');

//   // Update hidden field
//   document.getElementById('loginType').value = type;

//   // Clear fields when switching
//   if (type === 'user') {
//     document.getElementById('username').value = '';
//     document.getElementById('password').value = '';
//   } else {
//     document.getElementById('full_name').value = '';
//     document.getElementById('email').value = '';
//   }
// }


function showUserForm() {
    // Update UI
    document.getElementById('userOption').classList.add('border-purple-600', 'active-option');
    document.getElementById('userOption').classList.remove('border-transparent');
    document.getElementById('adminOption').classList.add('border-transparent');
    document.getElementById('adminOption').classList.remove('border-purple-600', 'active-option');
    
    // Switch form fields
    document.getElementById('userFields').classList.remove('hidden');
    document.getElementById('adminFields').classList.add('hidden');
    
    // Update form type
    document.getElementById('loginType').value = 'user';
    
    // Make only user fields required
    document.getElementById('full_name').required = true;
    document.getElementById('email').required = true;
    document.getElementById('username').required = false;
    document.getElementById('password').required = false;
}

function showAdminForm() {
    // Update UI
    document.getElementById('adminOption').classList.add('border-purple-600', 'active-option');
    document.getElementById('adminOption').classList.remove('border-transparent');
    document.getElementById('userOption').classList.add('border-transparent');
    document.getElementById('userOption').classList.remove('border-purple-600', 'active-option');
    
    // Switch form fields
    document.getElementById('adminFields').classList.remove('hidden');
    document.getElementById('userFields').classList.add('hidden');
    
    // Update form type
    document.getElementById('loginType').value = 'admin';
    
    // Make only admin fields required
    document.getElementById('username').required = true;
    document.getElementById('password').required = true;
    document.getElementById('full_name').required = false;
    document.getElementById('email').required = false;
}

// Initialize with admin form
document.addEventListener('DOMContentLoaded', function() {
    showAdminForm();
});
