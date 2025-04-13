import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white p-6 pb-0'>
      <div className='m-8 mb-0 md:m-16 md:flex md:justify-between md:gap-2 md:items-start bg-white text-black rounded-xl'>
      <div className="about-section2 m-4 p-4 md:w-2/3 md:p-4">
        <div className='text-2xl font-bold my-4 md:text-3xl lg:text-4xl w-max'>Seamless Transaction. <br /> Enjoy Innovation</div>
        <div className='mb-4 text-sm'>Experience seamless transaction with our our revolutionary mobile application. We simplify the mode of payments by providing 24/7 accessibility and all round security.</div>
        <div className="hero-btn bg-black hover:bg-gray-400 text-white p-2 flex items-center space-x-1 w-max rounded-3xl mb-12">
          <button>Download</button>
          <a href="https://apple.com"><img className='w-4' src="./src/assets/ic_baseline-apple.svg" alt="Apple logo"  /></a>
          <a href="https://playstore.com"><img className='w-4' src="./src/assets/mage_playstore.svg" alt="Playstore logo"  /></a>
        </div>
      </div>
      <div className='md:block md:w-1/3 md:mx-auto'><img className='' src="./src/assets/free-mockup.png" alt="" /></div>
    </div>
      <div className="footer2 my-2 p-4 md:flex md:justify-between md:items-center md:w-full">
        <div>
          <div className="flex items-center justify-start gap-2 text-2xl font-semibold"><img className='w-8' src="./src/assets/logo.png" alt="" />SWIFTPAY</div>
          <div className="text-sm">At Swiftpay we simplify the mode of payments by providing 24/7 accessibility and all round security.</div>
        </div>
        <div className='mt-4 grid grid-cols-2 justify-between items-center md:flex md:justify-center md:items-center md:gap-16 md:w-full'>
          <div className='mb-4'>
            <h3 className='font-bold'>Quick links</h3>
            <p className='hover:text-gray-500'><a href="">Home</a></p>
            <p className='hover:text-gray-500'><a href="">About Us</a></p>
            <p className='hover:text-gray-500'><a href="">Contact Us</a></p>
            <p className='hover:text-gray-500'><a href="">FAQs</a></p>
          </div>
          <div className='mb-4'>
            <h3 className='font-bold'>Legal links</h3>
            <p className='hover:text-gray-500'><a href="">Our Services</a></p>
            <p className='hover:text-gray-500'><a href="">Terms of Use</a></p>
            <p className='hover:text-gray-500'><a href="">Privacy Policy</a></p>
            <p className='hover:text-gray-500'><a href="">Login/Register</a></p>
          </div>
          <div className='mb-4'>
            <h3 className='font-bold'>Quick links</h3>
            <p className='hover:text-gray-500'><a href="">Home</a></p>
            <p className='hover:text-gray-500'><a href="">About Us</a></p>
            <p className='hover:text-gray-500'><a href="">Contact Us</a></p>
            <p className='hover:text-gray-500'><a href="">FAQs</a></p>
          </div>
          
        </div>
      </div>
      <div className="footer3 text-gray-500 font-extrabold w-full text-center text-8xl -m-4">SWIFTPAY</div>
      <div className="footer4 py-8 m-4 md:flex md:justify-between md:items-center md:gap-4 text-center">
        <div className='mb-2'>2025 SWIFTPAY. All rights reserved.</div>
        <div className='mb-2'><a className='hover:text-gray-500' href="">Privacy Policy </a>&#8226;<a className='hover:text-gray-500'href=""> Terms of Service</a></div>
        <div className="mb-2 flex justify-between items-center gap-2">
          <div className='w-6 border-4 rounded-full'><a href=""><img className='w-full' src="./src/assets/facebook.png" alt="" /></a></div>
          <div className='w-6 border-4 rounded-full'><a href=""><img className='w-full' src="./src/assets/twitter.png" alt="" /></a></div>
          <div className='w-6 border-4 rounded-full'><a href=""><img className='w-full' src="./src/assets/linkedin.png" alt="" /></a></div>
          <div className='w-6 border-4 rounded-full'><a href=""><img className='w-full' src="./src/assets/instagram.png" alt="" /></a></div>
        </div>
      </div>
    </div>
  )
}

export default Footer