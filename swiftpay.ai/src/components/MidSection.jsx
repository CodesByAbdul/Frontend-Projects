import React from 'react'

const MidSection = () => {
  return (
    <div className='text-center my-4'>
      <div className='text-[10px] bg-white w-max m-auto p-1.5 rounded-full mb-2'>AI Incorporated</div>
      <div className='text-xl/5 font-bold'>One AI Assistant, <br></br>Countless Possibilities</div>
      <div className='text-sm my-1'>Enjoy seamless transaction using our AI Assistant.</div>
      <div className="hero-btn bg-black hover:bg-gray-800 m-auto my-6 text-white p-2 flex items-center space-x-1 w-max rounded-full cursor-pointer">
          <button className='cursor-pointer'>Download</button>
          <a href="https://apple.com"><img className='w-4' src="./src/assets/ic_baseline-apple.svg" alt="Apple logo"  /></a>
          <a href="https://playstore.com"><img className='w-4' src="./src/assets/mage_playstore.svg" alt="Playstore logo"  /></a>
        </div>
      <div className='w-[60%] m-auto'><img src="./src/assets/Frame 4.png" alt="" /></div>
    </div>
  )
}

export default MidSection