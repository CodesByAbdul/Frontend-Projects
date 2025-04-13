import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll when menu is opened/closed
    if (!isMenuOpen) {
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = 'auto';
    }
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    // Re-enable scrolling when menu is closed after clicking a link
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'contact'];
      
      // Find which section is currently visible in the viewport
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section "active" when it's top is close to the viewport top
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      // Only set active section if one is found, otherwise leave as empty string
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Make sure to reset overflow when component unmounts
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Clean up effect to ensure body scrolling is re-enabled if component unmounts with menu open
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const isActive = (section) => {
    return activeSection === section;
  };

  return (
    <div className='fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50'>
      <header className="header text-black flex justify-between items-center p-4 px-6">
        <div className="logo w-8 flex gap-2 font-bold text-2xl">
          <img src="./src/assets/logo.png" alt="" /> SWIFTPAY
        </div>
        <div className='md:flex items-center space-x-4 hidden'>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a 
                  href='#hero' 
                  className={`hover:text-gray-400 px-3 py-1 rounded-md transition-colors ${isActive('hero') ? 'bg-black text-white' : ''}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={`hover:text-gray-400 px-3 py-1 rounded-md transition-colors ${isActive('about') ? 'bg-black text-white' : ''}`}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className={`hover:text-gray-400 px-3 py-1 rounded-md transition-colors ${isActive('services') ? 'bg-black text-white' : ''}`}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={`hover:text-gray-400 px-3 py-1 rounded-md transition-colors ${isActive('contact') ? 'bg-black text-white' : ''}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="hero-btn bg-black hover:bg-gray-800 text-white p-2 flex items-center space-x-1 w-max rounded-full cursor-pointer">
            <button className='cursor-pointer'>Download</button>
            <a href="https://apple.com"><img className='w-4' src="./src/assets/ic_baseline-apple.svg" alt="Apple logo" /></a>
            <a href="https://playstore.com"><img className='w-4' src="./src/assets/mage_playstore.svg" alt="Playstore logo" /></a>
          </div>
        </div>
        <button onClick={toggleMenu} id="hamburger" className="md:hidden text-black focus:outline-none hover:text-gray-500">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </header>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gradient-to-b from-gray-800 to-gray-900 text-white p-4 text-center fixed top-16 left-0 right-0 h-screen z-40`}>
        <ul>
          <li>
            <a 
              href="#hero" 
              className={`block py-2 hover:text-gray-400 w-max m-auto px-3 rounded-md ${isActive('hero') ? 'bg-black text-white' : ''}`}
              onClick={handleLinkClick}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`block py-2 hover:text-gray-400 w-max m-auto px-3 rounded-md ${isActive('about') ? 'bg-black text-white' : ''}`}
              onClick={handleLinkClick}
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className={`block py-2 hover:text-gray-400 w-max m-auto px-3 rounded-md ${isActive('services') ? 'bg-black text-white' : ''}`}
              onClick={handleLinkClick}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`block py-2 hover:text-gray-400 w-max m-auto px-3 rounded-md ${isActive('contact') ? 'bg-black text-white' : ''}`}
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="hero-btn bg-black hover:bg-gray-800 text-white p-2 flex items-center space-x-1 w-max rounded-3xl mb-12 mx-auto cursor-pointer">
          <button className='cursor-pointer'>Download</button>
          <a href="https://apple.com"><img className='w-4' src="./src/assets/ic_baseline-apple.svg" alt="Apple logo" /></a>
          <a href="https://playstore.com"><img className='w-4' src="./src/assets/mage_playstore.svg" alt="Playstore logo" /></a>
        </div>
      </div>
    </div>
  )
}

export default Header