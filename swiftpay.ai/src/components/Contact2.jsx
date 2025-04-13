import React from 'react'

const Contact2 = () => {
  return (
    <div className='hero md:flex md:justify-between md:items-center md:gap-4 text-black p-6 md:pt-30 mt-4 md:h-screen mb-4'>
      <div className='hero-section md:w-1/2 md:flex flex-col justify-center items-start gap-4 p-4 border-0 bg-white rounded-xl mb-4 md:h-[80vh]'>
        <p className="hero-header bg-gray-200 text-[10px] w-max p-2 rounded-[20px]">Newsletter</p>
        <h2 className="hero-main text-3xl font-semibold my-4 md:my-2 md:text-4xl">Subscribe to our newsletter</h2>
        <p className="hero-sub text-sm mb-4">Subscribe to our newsletter to get notified when ever we make updates.</p>
        <div className="hero-btn ">
          <input type="email" className='text-sm w-56 p-2' placeholder='Enter your email address' /><button className='bg-black focus:border-none text-white text-sm p-2 rounded-lg hover:bg-gray-300 cursor-pointer'>Subscribe</button>
        </div>
        <div className="hero-footer mt-auto">
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
      <div className='hero-section md:w-1/2 md:flex flex-col justify-center items-start gap-4 p-4 border-0 bg-white rounded-xl mb-4 md:h-[80vh]'>
        <p className="hero-header hero-header bg-gray-200 text-[10px] w-max p-2 rounded-[20px]">Innovation</p>
        <h2 className="hero-main text-3xl font-semibold my-4 md:my-2 md:text-4xl">Revolutionary AI Incorporated Fintech</h2>
        <p className="hero-sub text-sm mb-4">Join us, let’s break barriers together.</p>
        <div className="w-auto overflow-hidden">
          <img className='w-full' src="./src/assets/iMockup1.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact2