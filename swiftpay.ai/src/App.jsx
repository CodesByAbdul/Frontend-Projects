import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sponsors from './components/Sponsors.jsx'
import About from './components/About.jsx'
import MidSection from './components/MidSection.jsx'
import About2 from './components/About2.jsx'
import Services from './components/Services.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact1 from './components/Contact1.jsx'
import Contact2 from './components/Contact2.jsx'
import Footer from './components/Footer.jsx'
function App() {
 
  return (
    <div className='bg-[#f5f5f5]'>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <Sponsors />
      <div id="about">
        <About />
        <MidSection />
        <About2 />
      </div>
      <div id="services">
        <Services />
        <Testimonials />
      </div>
      <div id="contact">
        <Contact1 />
        <Contact2 />
      </div>
      <Footer />
    </div>
  )
}
export default App