import React from 'react'

const About2 = () => {
  return (
    <div className='mt-8 p-6 md:flex md:justify-between md:gap-2 md:items-center'>
      <div className="about-section2 m-4 md:w-full md:h-[80vh] md:p-4">
        <div className='bg-white w-max text-sm p-1.5 rounded-2xl'>How it Works</div>
        <div className='text-2xl font-semibold my-4 md:text-3xl lg:text-4xl w-max'>Stay in control of your Finances.</div>
        <div className='mb-4'>Swiftpay Offers seamless simplified and secure financial platforrm to manage your finances. Stay in control of your Finances With Swiftpay.</div>
        <div className='my-6 md:my-10'>
          <div className="flex gap-2 mb-2 text-sm"><img className='w-4' src="./src/assets/download-square-01.svg" alt="" /> <p>Download App</p></div>
          <div className="flex gap-2 mb-2 text-sm"><img className='w-4' src="./src/assets/brush.svg" alt="" /> <p>Create an Account</p></div>
          <div className="flex gap-2 mb-2 text-sm"><img className='w-4' src="./src/assets/account-setting-01.svg" alt="" /> <p>Set up your Account</p></div>
          <div className="flex gap-2 mb-2 text-sm"><img className='w-4' src="./src/assets/money-receive-square.svg" alt="" /> <p>Fund Account and Manage your Finances</p></div>
        </div>
        <div className="hero-btn bg-black hover:bg-gray-800 text-white p-2 flex items-center space-x-1 w-max rounded-full cursor-pointer">
          <button className='cursor-pointer'>Download</button>
          <a href="https://apple.com"><img className='w-4' src="./src/assets/ic_baseline-apple.svg" alt="Apple logo"  /></a>
          <a href="https://playstore.com"><img className='w-4' src="./src/assets/mage_playstore.svg" alt="Playstore logo"  /></a>
        </div>
      </div>
      <div className='w-full mx-auto rounded-2xl overflow-y-hidden h-[80vh] bg-[#ececec] px-30 pt-30'><img className='' src="./src/assets/iMockup.png" alt="" /></div>
    </div>
  )
}

export default About2