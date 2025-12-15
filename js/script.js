document.addEventListener('DOMContentLoaded', () => {

  // Initialize Spotlight Effect for Expanded Layout Cards
  if (window.initSpotlight) {
    initSpotlight('.spotlight-card');
  }

  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

});
