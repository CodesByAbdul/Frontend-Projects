import React from 'react'

const About = () => {
  return (
    <div className='about md:flex md:justify-between md:items-center md:gap-4 text-black p-6 md:pt-20 md:h-screen mb-4 md:mb-8'>
      <div className="about-section1 p-4 bg-[#ececec] md:w-full rounded-lg shadow-lg">
        <div className="flex justify-start items-center gap-3 md:mb-12">
          <div className='flex -gap-2'>
            <img src="./src/assets/Ellipse1.png" alt="" className='ml-2' />
            <img src="./src/assets/Ellipse2.png" alt="" className='-ml-2' />
            <img src="./src/assets/Ellipse3.png" alt="" className='-ml-2' />
            <img src="./src/assets/Ellipse5.png" alt="" className='-ml-2' />
          </div>
          <p className='text-sm'>Join over 2000+ active and happy users</p>
        </div>
        <div className="bg-white p-4 m-2 mt-4 rounded-lg shadow-lg md:mb-12">
          <div className="text-black flex justify-between items-center mb-4">
            <div className=''>
              <div className="star flex"><img src="./src/assets/star.svg" alt="" /><img src="./src/assets/star.svg" alt="" /><img src="./src/assets/star.svg" alt="" /><img src="./src/assets/star.svg" alt="" /></div>
              <div className="name text-1xl">Amy Barker</div>
            </div>
            <div className='flex gap-2'><img className='bg-slate-200 p-2 rounded-full' src="./src/assets/arrow-left.svg" alt="" /><img className='bg-slate-200 p-2 rounded-full' src="./src/assets/arrow-right.svg" alt="" /></div>
          </div>
          <div className='text-sm text-gray-900 md:text-base'>
          I have been able to save more money since joining Swift pay. Their Target Savings is Amazing. I have been able to save more money since joining Swift pay. Their Target Savings is Amazing.
          </div>
        </div>
        <div className="flex justify-between items-center gap-6 m-2 mt-6">
          <div className="bg-white text-black rounded-xl h-34 p-6 w-full">
            <img src="./src/assets/emoji.svg" alt="" />
            <p className="text-2xl font-bold my-1">2K+</p>
            <p>Happy users</p>
          </div>
          <div className="bg-black text-white rounded-xl h-34 p-6 w-full">
            <div className='flex gap-1'>
              <img src="./src/assets/star.svg" alt="" />
              <img src="./src/assets/star.svg" alt="" />
              <img src="./src/assets/star.svg" alt="" />
              <img src="./src/assets/star.svg" alt="" />
            </div>
            <p className="text-2xl font-bold my-1">4.0</p>
            <p>Average rating</p>
          </div>
        </div>
      </div>
      <div className="about-section2 m-4 md:w-full md:p-4">
        <div className='bg-white w-max text-sm p-1.5 rounded-2xl mb-4'>What we Offer</div>
        <div className='text-2xl font-semibold my-6 md:text-3xl'>Swift and Simplified Payment Pathways</div>
        <div className='mb-4'>Swiftpay Offers seamless simplified and secure financial transactions. With SwiftAI it even gets better.</div>
        <div className='my-6 md:my-10'>
          <div className="flex gap-2 mb-2 text-sm"><img className='w-4' src="./src/assets/magic-wand-01.svg" alt="" /> <p>Artificial Intelligence assistant</p></div>
          <div className="flex gap-2 mb-2 text-sm"><img className='w-4' src="./src/assets/renewable-energy-01.svg" alt="" /> <p>Savings and Target Savings</p></div>
          <div className="flex gap-2 mb-2 text-sm"><img className='w-4' src="./src/assets/security-check.svg" alt="" /> <p>Two Factor Authentication Protection</p></div>
          <div className="flex gap-2 mb-2 text-sm"><img className='w-4' src="./src/assets/rocket-01.svg" alt="" /> <p>Swift and Seamless Transaction</p></div>
          <div className="flex gap-2 mb-2 text-sm"><img className='w-4' src="./src/assets/navigation-04.svg" alt="" /> <p>Global Reach</p></div>
        </div>
        <div className="hero-btn bg-black hover:bg-gray-800 text-white p-2 flex items-center space-x-1 w-max rounded-full cursor-pointer">
          <button className='cursor-pointer'>Download</button>
          <a href="https://apple.com"><img className='w-4' src="./src/assets/ic_baseline-apple.svg" alt="Apple logo"  /></a>
          <a href="https://playstore.com"><img className='w-4' src="./src/assets/mage_playstore.svg" alt="Playstore logo"  /></a>
        </div>
      </div>

    </div>
  )
}

export default About