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

// Mobile navigation

const navToggle = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.mobile-menu-content');
const cancelMenu = document.querySelector('.cancel-menu');
const menuLinks = document.querySelectorAll('.mobile-menu-content a');

navToggle.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
  navToggle.style.display = 'none';
  cancelMenu.style.display = 'block';
});

cancelMenu.addEventListener('click', () => {
  navMenu.style.display = 'none';
  cancelMenu.style.display = 'none';
  navToggle.style.display = 'block';
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.style.display = 'none';
    cancelMenu.style.display = 'none';
    navToggle.style.display = 'block';
  });  
});

/* Testimonial functionality */

// Testimonial data
// Array of 41 testimonial objects
const testimonials = [
  {
    name: "Amy Barker",
    message: "I have been able to save more money since joining Swift pay. Their Target Savings is Amazing. I have been able to save more money since joining Swift pay. Their Target Savings is Amazing.",
    picture: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    name: "John Williams",
    message: "The customer service is exceptional. They responded to all my inquiries promptly and resolved my issues efficiently. Highly recommend their services to anyone looking for reliability.",
    picture: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4
  },
  {
    name: "Sarah Miller",
    message: "Swift pay has revolutionized how I manage my finances. The interface is intuitive and the features are exactly what I needed. The target savings feature is a game-changer!",
    picture: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
  {
    name: "Robert Chen",
    message: "After trying multiple financial services, I can confidently say Swift pay stands out from the crowd. Their attention to detail and user experience is unmatched in the industry.",
    picture: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5
  },
  {
    name: "Emma Thompson",
    message: "The security features give me peace of mind knowing my finances are protected. Swift pay has thought of everything to ensure a safe and seamless experience.",
    picture: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 4
  },
  {
    name: "Michael Rodriguez",
    message: "As a freelancer, keeping track of my finances used to be a nightmare. Swift pay simplified everything. Now I can focus on my work instead of worrying about money management.",
    picture: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5
  },
  {
    name: "Jessica Wang",
    message: "The automatic savings feature has helped me build an emergency fund without even thinking about it. Swift pay really understands what modern consumers need.",
    picture: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 5
  },
  {
    name: "David Okafor",
    message: "The mobile app is flawless. I can manage my finances on the go, which is essential for my busy lifestyle. Swift pay has become an indispensable tool in my daily routine.",
    picture: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 4
  },
  {
    name: "Laura Martinez",
    message: "I've recommended Swift pay to all my friends and family. The referral program is generous, and everyone I've referred has thanked me for introducing them to such a fantastic service.",
    picture: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 5
  },
  {
    name: "Thomas Johnson",
    message: "The investment options are diverse and well-explained. As someone new to investing, I appreciate how Swift pay makes it accessible and understandable.",
    picture: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4
  },
  {
    name: "Olivia Patel",
    message: "Swift pay's budgeting tools have completely transformed how I think about spending. I'm more aware of my habits and have been able to eliminate unnecessary expenses.",
    picture: "https://randomuser.me/api/portraits/women/89.jpg",
    rating: 5
  },
  {
    name: "William Lee",
    message: "The integration with other financial platforms is seamless. I can get a holistic view of my finances without juggling multiple apps or websites.",
    picture: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 4
  },
  {
    name: "Sophia Kim",
    message: "As a small business owner, Swift pay has simplified my accounting process. The business features are robust yet easy to use, saving me both time and money.",
    picture: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5
  },
  {
    name: "Daniel Brown",
    message: "The customer support team went above and beyond to help me resolve an issue. Their dedication to customer satisfaction is evident in every interaction.",
    picture: "https://randomuser.me/api/portraits/men/85.jpg",
    rating: 5
  },
  {
    name: "Ava Johnson",
    message: "Swift pay's alerts and notifications keep me informed about my financial status. I'm never caught off guard by unexpected charges or low balances.",
    picture: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 4
  },
  {
    name: "James Wilson",
    message: "The bill payment feature is a lifesaver. I've never missed a payment since I started using Swift pay. The reminders are timely and the process is straightforward.",
    picture: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5
  },
  {
    name: "Mia Garcia",
    message: "Swift pay's currency conversion features are essential for my international lifestyle. The rates are competitive and the process is transparent.",
    picture: "https://randomuser.me/api/portraits/women/72.jpg",
    rating: 4
  },
  {
    name: "Ethan Davis",
    message: "The goal-setting feature has helped me save for major purchases. I'm more disciplined with my spending knowing I have specific financial targets to reach.",
    picture: "https://randomuser.me/api/portraits/men/18.jpg",
    rating: 5
  },
  {
    name: "Isabella Martinez",
    message: "Swift pay's educational resources have improved my financial literacy. I feel more confident making financial decisions thanks to their comprehensive guides.",
    picture: "https://randomuser.me/api/portraits/women/37.jpg",
    rating: 4
  },
  {
    name: "Noah Anderson",
    message: "The joint account feature has simplified household finances for my partner and me. We can track our spending together while maintaining individual accounts.",
    picture: "https://randomuser.me/api/portraits/men/92.jpg",
    rating: 5
  },
  {
    name: "Charlotte Taylor",
    message: "Swift pay has the best rewards program I've encountered. I earn points on everyday purchases that I can redeem for meaningful rewards.",
    picture: "https://randomuser.me/api/portraits/women/62.jpg",
    rating: 5
  },
  {
    name: "Benjamin Robinson",
    message: "The spending analysis tools have revealed patterns I wasn't aware of. Swift pay has helped me identify areas where I can cut back and save more.",
    picture: "https://randomuser.me/api/portraits/men/29.jpg",
    rating: 4
  },
  {
    name: "Amelia Nelson",
    message: "The tax preparation features saved me hours of work and stress. Swift pay organized all my financial information in one place, making tax season much more manageable.",
    picture: "https://randomuser.me/api/portraits/women/91.jpg",
    rating: 5
  },
  {
    name: "Lucas Hill",
    message: "Swift pay's retirement planning tools have given me a clear picture of my financial future. I feel more prepared and less anxious about retirement.",
    picture: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 5
  },
  {
    name: "Harper King",
    message: "The debt management features helped me develop a realistic plan to become debt-free. I'm making progress that would have been impossible without Swift pay.",
    picture: "https://randomuser.me/api/portraits/women/19.jpg",
    rating: 4
  },
  {
    name: "Alexander Wright",
    message: "Swift pay's expense tracking is incredibly detailed yet easy to use. I can categorize and analyze my spending with minimal effort.",
    picture: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5
  },
  {
    name: "Evelyn Lopez",
    message: "The Swift pay community forum has been an unexpected benefit. I've learned so much from other users sharing their financial strategies and experiences.",
    picture: "https://randomuser.me/api/portraits/women/47.jpg",
    rating: 4
  },
  {
    name: "Mason Scott",
    message: "The credit score monitoring feature has helped me improve my score significantly. Swift pay provides actionable advice tailored to my financial situation.",
    picture: "https://randomuser.me/api/portraits/men/63.jpg",
    rating: 5
  },
  {
    name: "Abigail Green",
    message: "Swift pay's subscription tracking has revealed several services I was paying for but not using. I've saved hundreds by cancelling unnecessary subscriptions.",
    picture: "https://randomuser.me/api/portraits/women/84.jpg",
    rating: 5
  },
  {
    name: "Elijah Adams",
    message: "The cashback offers are relevant to my spending habits and easy to activate. I appreciate how Swift pay helps me save money on purchases I would make anyway.",
    picture: "https://randomuser.me/api/portraits/men/74.jpg",
    rating: 4
  },
  {
    name: "Elizabeth Baker",
    message: "Swift pay's financial health score gives me a quick snapshot of my overall financial situation. It's motivating to see the score improve as I make better decisions.",
    picture: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5
  },
  {
    name: "Henry Carter",
    message: "The recurring payment feature ensures I never miss a bill. Swift pay has saved me from late fees and maintained my good standing with service providers.",
    picture: "https://randomuser.me/api/portraits/men/81.jpg",
    rating: 5
  },
  {
    name: "Scarlett Mitchell",
    message: "Swift pay's customer service is available 24/7, which is crucial for my schedule. I've received assistance at odd hours without any delay or inconvenience.",
    picture: "https://randomuser.me/api/portraits/women/59.jpg",
    rating: 4
  },
  {
    name: "Sebastian Hall",
    message: "The financial calendar helps me plan for upcoming expenses. Swift pay ensures I'm prepared for bills, subscriptions, and other regular payments.",
    picture: "https://randomuser.me/api/portraits/men/19.jpg",
    rating: 5
  },
  {
    name: "Chloe Rivera",
    message: "Swift pay's app is fast and reliable, even on older devices. I appreciate that they've designed it to be accessible to everyone, regardless of their technology.",
    picture: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 5
  },
  {
    name: "Julian Campbell",
    message: "The biometric authentication gives me peace of mind. Swift pay prioritizes security without sacrificing convenience.",
    picture: "https://randomuser.me/api/portraits/men/38.jpg",
    rating: 4
  },
  {
    name: "Penelope Brooks",
    message: "Swift pay's customer loyalty program has rewarded me for my continued use. The perks improve with time, which encourages long-term engagement.",
    picture: "https://randomuser.me/api/portraits/women/71.jpg",
    rating: 5
  },
  {
    name: "Theodore Kelly",
    message: "The customizable dashboard allows me to prioritize the features I use most. Swift pay adapts to my needs rather than forcing me to adapt to the app.",
    picture: "https://randomuser.me/api/portraits/men/87.jpg",
    rating: 5
  },
  {
    name: "Zoe Cooper",
    message: "Swift pay's financial insights are personalized and actionable. The suggestions have helped me optimize my spending and saving habits.",
    picture: "https://randomuser.me/api/portraits/women/7.jpg",
    rating: 4
  },
  {
    name: "Jayden Price",
    message: "The automated savings rules have helped me build wealth without thinking about it. Swift pay makes saving money effortless and painless.",
    picture: "https://randomuser.me/api/portraits/men/27.jpg",
    rating: 5
  },
  {
    name: "Lily Reed",
    message: "Swift pay's gift card management feature is a hidden gem. I can keep track of all my gift cards in one place and never let them expire unused.",
    picture: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5
  },
  {
    name: "Aiden Bailey",
    message: "The financial reports are comprehensive yet easy to understand. Swift pay provides me with insights that would require an accountant otherwise.",
    picture: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 4
  }
];

// Current testimonial index
let currentTestimonialIndex = 0;

// Cache DOM elements for better performance
const starDiv = document.querySelector('.testimony .customer .profile .star-name .star');
const nameDiv = document.querySelector('.testimony .customer .profile .star-name .name');
const messageDiv = document.querySelector('.testimony .message');
const pictureDiv = document.querySelector('.testimony .customer .profile .picture');
const flexContainer = document.getElementById('flex-container');

// Star SVG template - store once and reuse for better performance
const starSvg = '<img src="page-assets/material-symbols-light_star-rounded.png" alt="star rating">';

// Function to generate star ratings HTML
function generateStarsHTML(rating) {
  return starSvg.repeat(rating);
}

// Function to render testimonial images into flex containers
function renderTestimonialImages() {
  // Get all vertical-flex divs
  const verticalFlexDivs = document.querySelectorAll('.vertical-flex');
  
  // Loop through each vertical-flex div
  verticalFlexDivs.forEach((div, index) => {
    if (index < testimonials.length) {
      // Create image element
      const img = document.createElement('img');
      img.src = testimonials[index].picture;
      img.alt = testimonials[index].name;
      img.title = testimonials[index].name;
      img.className = 'testimonial-image';
      img.dataset.index = index;
      
      // Add click event
      img.addEventListener('click', () => {
        currentTestimonialIndex = index;
        displayTestimonial();
        highlightActiveImage(index);
      });
      
      // Add image to div
      div.appendChild(img);
    }
  });
}

// Function to highlight active image
function highlightActiveImage(index) {
  // Remove active class from all images
  document.querySelectorAll('.testimonial-image').forEach(img => {
    img.classList.remove('active');
  });
  
  // Add active class to selected image
  const activeImg = document.querySelector(`.testimonial-image[data-index="${index}"]`);
  if (activeImg) {
    activeImg.classList.add('active');
  }
}

// Function to display current testimonial
function displayTestimonial() {
  const currentTestimonial = testimonials[currentTestimonialIndex];
  
  // Update the stars
  starDiv.innerHTML = generateStarsHTML(currentTestimonial.rating);
  
  // Update the name
  nameDiv.textContent = currentTestimonial.name;
  
  // Update the message
  messageDiv.innerHTML = currentTestimonial.message;

  // Update the picture 
  pictureDiv.innerHTML = currentTestimonial.picture ? `<img src="${currentTestimonial.picture}" alt="${currentTestimonial.name}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; margin-right: 10px;">` : '';
  
  // Highlight active image
  highlightActiveImage(currentTestimonialIndex);
}

// Function to handle next testimonial
function nextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  displayTestimonial();
}

// Function to handle previous testimonial
function previousTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  displayTestimonial();
}

// Add styles for testimonial images
function addTestimonialStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .testimonial-image {
      width: 100%;
      height: 100%;
      border-radius: 15%;
      object-fit: cover;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid transparent;
    }
    
    .testimonial-image:hover {
      transform: scale(1.1);
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    
    .testimonial-image.active {
      border-color: #5f6368;
      box-shadow: 0 0 8px rgba(95,99,104,0.6);
    }
    
    .vertical-flex {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  document.head.appendChild(style);
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Add styles
  addTestimonialStyles();
  
  // Render testimonial images
  renderTestimonialImages();
  
  // Display the first testimonial
  displayTestimonial();
  
  // Add event listeners to navigation arrows
  const leftArrow = document.querySelector('.testimony .customer .arrow .arrows.left');
  const rightArrow = document.querySelector('.testimony .customer .arrow .arrows.right');
  
  leftArrow.addEventListener('click', previousTestimonial);
  rightArrow.addEventListener('click', nextTestimonial);
  
  // Optionally add profile picture to the testimonial section
  const profileDiv = document.querySelector('#testimony .customer .profile');
  if (profileDiv && !profileDiv.querySelector('.profile-img')) {
    const profileImg = document.createElement('div');
    profileImg.className = 'profile-img';
    profileImg.innerHTML = `<img src="${testimonials[0].picture}" alt="${testimonials[0].name}" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover; margin-right: 10px;">`;
    profileDiv.insertBefore(profileImg, profileDiv.firstChild);
  }
});