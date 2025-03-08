// Select the home link and all nav links
const homeLink = document.querySelector('nav a[href="#hero-section"]'); // Adjust selector as needed
const navLinks = document.querySelectorAll('nav a'); // Select all navigation links

// Function to set the active link
function setActiveLink(activeLink) {
  // Remove active class from all links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to the specified link
  activeLink.classList.add('active');
}

// Set home link as active on page load
document.addEventListener('DOMContentLoaded', () => {
  setActiveLink(homeLink);
});

// Change active link when clicking on a different nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    setActiveLink(link);
  });
});

// Change active link when scrolling past sections
// Add this improved scroll handler to replace your current one
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  
  // Get all sections that correspond to nav links
  const sections = document.querySelectorAll('section[id]');
  
  // Check which section is currently in view
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Offset by 100px for earlier activation
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Find the corresponding nav link and activate it
      const correspondingLink = document.querySelector(`nav a[href="#${section.id}"]`);
      if (correspondingLink) {
        setActiveLink(correspondingLink);
      }
    }
  });
});