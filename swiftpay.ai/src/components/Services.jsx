import React from 'react'

const Services = () => {
  return (
    <div className='text-center my-4 pt-20'>
      <div className='text-[10px] bg-white w-max m-auto p-1.5 rounded-full mb-2'>Services</div>
      <div className='text-xl/5 font-bold'>Premium Financial <br />Services and Beyond</div>
      <div className='text-sm my-2'>Enjoy seamless financial services. Send money,<br />Pay bills, Target savings and utilize an AI assistant.</div>
      <div className="hero-btn bg-black hover:bg-gray-800 m-auto text-white p-2 flex items-center space-x-1 w-max rounded-full cursor-pointer">
          <button className='cursor-pointer'>Download</button>
          <a href="https://apple.com"><img className='w-4' src="./src/assets/ic_baseline-apple.svg" alt="Apple logo"  /></a>
          <a href="https://playstore.com"><img className='w-4' src="./src/assets/mage_playstore.svg" alt="Playstore logo"  /></a>
        </div>
      <div className='w-[60%] m-auto md:flex md:justify-between md:items-center md:gap-2'>
        <div className='p-2'>
          <img className='w-full m-auto my-2' src="./src/assets/Frame5.png" alt="" />
          <p>Target Savings</p>  
        </div>
        <div className='p-2'>
          <p>Send funds & PayBills</p>  
          <img className='w-full m-auto my-2' src="./src/assets/Frame6.png" alt="" />
        </div>
        <div className='p-2'>
          <img className='w-full m-auto my-2' src="./src/assets/Frame7.png" alt="" />
          <p>AI assistant</p>  
        </div>
      </div>
    </div>
  )
}

export default Services