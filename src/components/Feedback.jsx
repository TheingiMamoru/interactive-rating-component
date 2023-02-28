import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

const Feedback = () => {
    const [rate, setRate] = useState('')
    console.log(rate);

    const handleClick = (e) =>{
        setRate(e.target.innerText)
    }
  return (
    <div className='flex flex-col gap-3 w-[400px] h-fit  rounded-[30px] shadow-xl p-[35px] bg-dark-blue'>
        <div className=' flex w-[45px] h-[45px] bg-medium-gray rounded-full items-center justify-center mb-5'>
            <ReactSVG src='./src/assets/images/icon-star.svg'/>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='font-bold text-2xl text-white'>
                How did we do?
            </h1>
            <p className='text-[15px] text-light-gray leading-6 '>
                Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!
            </p>
        </div>
        <div className='flex justify-between mb-3'>
            <div onClick={handleClick} className=' flex w-[45px]  h-[45px] {text-light-gray bg-medium-gray} rounded-full items-center justify-center cursor-pointer hover:text-white hover:bg-orange'>
                1
            </div>
            <div className=' flex w-[45px]  h-[45px] text-light-gray bg-medium-gray rounded-full items-center justify-center cursor-pointer hover:text-white hover:bg-orange'>
                2
            </div>
            <div className=' flex w-[45px]  h-[45px] text-light-gray bg-medium-gray rounded-full items-center justify-center cursor-pointer hover:text-white hover:bg-orange'>
                3
            </div>
            <div className=' flex w-[45px]  h-[45px] text-light-gray bg-medium-gray rounded-full items-center justify-center cursor-pointer hover:text-white hover:bg-orange'>
                4
            </div>
            <div className=' flex w-[45px]  h-[45px] text-light-gray bg-medium-gray rounded-full items-center justify-center cursor-pointer hover:text-white hover:bg-orange'>
                5
            </div>
        </div>
        <div>
            <Link to={'thankyou/'} className='grid'>
                <button className='bg-orange text-white p-3 rounded-full tracking-widest hover:text-orange hover:bg-white'>SUBMIT</button>
            </Link>
        </div>
    </div>
  )
}

export default Feedback