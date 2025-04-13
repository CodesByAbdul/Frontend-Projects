import React from 'react'

const Sponsors = () => {
  return (
    <div className='sponsors-section p-6 my-8 flex flex-col md:flex-row md:gap-20 md:justify-center md:items-center justify-center items-center text-black'>
      <p className='font-semibold text-center m-4'>Backed By:</p>
      <div className="sponsors flex justify-evenly items-center gap-2 md:gap-4 lg:gap-8 xl:gap-16">
        <img src="./src/assets/logo1.png" alt="Sponsor 1" className='' />
        <img src="./src/assets/logo2.png" alt="Sponsor 2" className='' />
        <img src="./src/assets/logo3.png" alt="Sponsor 3" className='' />
        <img src="./src/assets/logo4.png" alt="Sponsor 4" className='' />
        <img src="./src/assets/logo5.png" alt="Sponsor 5" className='' />
      </div>
    </div>
  )
}

export default Sponsors