import React from 'react'

const Contact1 = () => {
  return (
    <div className="pt-20">
      <div className='m-4 p-6 mb-0 md:m-16 md:flex md:justify-between md:gap-2 md:items-start bg-black text-white rounded-xl py-4'>
        <div className="about-section2 pt-4 md:w-2/3 md:p-6">
          <div className='bg-white text-black w-max text-[10px] p-1.5 rounded-2xl'>Partnership</div>
          <div className='text-2xl font-bold my-4 md:text-3xl lg:text-4xl w-max'>Want to Partner with Us? <br /> Let’s Innovate together</div>
          <div className='mb-4 text-sm'>Experience seamless transaction with our our revolutionary mobile application. We simplify the mode of payments by providing 24/7 accessibility and all round security.</div>
          <div className="hero-btn bg-white hover:bg-gray-400 text-black p-2 flex items-center space-x-1 w-max rounded-3xl mb-2 mt-6">
            <button>Contact Us</button>
          </div>
        </div>
        <div className='hidden md:block md:w-1/3 md:mx-auto'><img className='' src="./src/assets/hand-image.png" alt="" /></div>
      </div>
    </div>
  )
}

export default Contact1