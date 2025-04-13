import React from 'react'


const Hero = () => {
  return (
    <div className='hero md:flex md:justify-between md:items-center md:gap-10 text-black pt-20 md:pt-30 p-6 md:h-screen mb-4'>
      <div className='hero-section md:w-1/2 md:flex flex-col justify-center items-start gap-4'>
        <p className="hero-header bg-white text-[12px] w-max p-2 rounded-[20px]">AI Incorporated. 2FA Protected</p>
        <h1 className="hero-main text-5xl font-bold my-6 md:my-2 md:text-4xl">Simplify Your Finances, Amplify Your Wealth</h1>
        <p className="hero-sub text-[16px] mb-4">Experience seamless transaction with our our revolutionary AI incorporated mobile application. We simplify the mode of payments by providing 24/7 accessibility and all round security.</p>
        <div className="hero-btn bg-black hover:bg-gray-800 text-white p-2 flex items-center space-x-1 w-max rounded-full cursor-pointer mb-12">
          <button className='cursor-pointer'>Download</button>
          <a href="https://apple.com"><img className='w-4' src="./src/assets/ic_baseline-apple.svg" alt="Apple logo"  /></a>
          <a href="https://playstore.com"><img className='w-4' src="./src/assets/mage_playstore.svg" alt="Playstore logo"  /></a>
        </div>
        <div className="hero-footer mb-10">
          <p>2000+ active users</p>
          <div className="hero-footer-img flex -gap-2 m-2">
            <img className="-ml-2" src="./src/assets/Ellipse1.png" alt="" />
            <img className="-ml-2" src="./src/assets/Ellipse2.png" alt="" />
            <img className="-ml-2" src="./src/assets/Ellipse6.png" alt="" />
            <img className="-ml-2" src="./src/assets/Ellipse4.png" alt="" />
            <img className="-ml-2" src="./src/assets/Ellipse5.png" alt="" />
            <img className="-ml-2" src="./src/assets/Ellipse3.png" alt="customer" />
          </div>
        </div>
      </div>
      <div className='hero-img md:w-1/2 flex justify-center items-center w-[90%] m-auto'>
        <img src="./src/assets/frame.png" alt="Hero image" className='hero-img w-auto h-auto' />
      </div>
    </div>
  )
}

export default Hero