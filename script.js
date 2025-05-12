// Change welcome text dynamically
function changeWelcomeText() {
  const heading = document.querySelector('.hero-content h1');
  heading.textContent = 'You’re Protected with SalGuard!';
}

// Modify CSS styles
function highlightAbout() {
  const aboutSection = document.getElementById('about');
  aboutSection.style.backgroundColor = '#d0f0f6';
  aboutSection.style.border = '2px solid #0077b6';
}

// Add new service to the list
function addService() {
  const ul = document.querySelector('#services ul');
  const newItem = document.createElement('li');
  newItem.textContent = 'Cybersecurity Protection';
  ul.appendChild(newItem);
}

// Remove contact section
function removeContact() {
  const contact = document.getElementById('contact-section');
  if (contact) {
    contact.remove();
  }
}

// Scroll-triggered animations
const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

animatedElements.forEach(el => observer.observe(el));
