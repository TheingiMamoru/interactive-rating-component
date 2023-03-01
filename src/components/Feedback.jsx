import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { ReactSVG } from 'react-svg'

const Feedback = () => {
    const [rate, setRate] = useState('')
    // console.log(rate);

    const [toggle, setToggle] = useState(false)

    const handleClick = (e) =>{
        setRate(e.target.innerText)
    }

    const navigate = useNavigate()

    const handleSubmit = () => {
        if (rate !== '') {
            setToggle(!toggle)
            setTimeout(()=> navigate(`thankyou/${rate}`), 500)
            
        }
    }
    console.log(toggle);
  return (
    <div className={`${toggle && `animate__animated animate__fadeOutDown` } flex flex-col gap-3 w-[400px] h-fit rounded-[30px] shadow-xl p-[35px] bg-dark-blue`} >
        <div className=' flex w-[45px] h-[45px] bg-medium-gray rounded-full items-center justify-center mb-5'>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
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
            <div onClick={handleClick}  className={`flex w-[45px]  h-[45px] ${rate === '1' ? (`text-white bg-light-gray`) : (`text-light-gray bg-medium-gray`)} rounded-full items-center justify-center cursor-pointer hover:text-white hover:bg-orange`}>
                1
            </div>
            <div onClick={handleClick} className={`flex w-[45px]  h-[45px] ${rate === '2' ? (`text-white bg-light-gray`) : (`text-light-gray bg-medium-gray`)} rounded-full items-center justify-center cursor-pointer hover:text-white hover:bg-orange`}>
                2
            </div>
            <div onClick={handleClick} className={`flex w-[45px]  h-[45px] ${rate === '3' ? (`text-white bg-light-gray`) : (`text-light-gray bg-medium-gray`)} rounded-full items-center justify-center cursor-pointer hover:text-white hover:bg-orange`}>
                3
            </div>
            <div onClick={handleClick} className={`flex w-[45px]  h-[45px] ${rate === '4' ? (`text-white bg-light-gray`) : (`text-light-gray bg-medium-gray`)} rounded-full items-center justify-center cursor-pointer hover:text-white hover:bg-orange`}>
                4
            </div>
            <div onClick={handleClick} className={`flex w-[45px]  h-[45px] ${rate === '5' ? (`text-white bg-light-gray`) : (`text-light-gray bg-medium-gray`)} rounded-full items-center justify-center cursor-pointer hover:text-white hover:bg-orange`}>
                5
            </div>
        </div>
        <div className='grid'>
            <button onClick={handleSubmit} className='bg-orange text-white p-3 rounded-full tracking-widest hover:text-orange hover:bg-white'>SUBMIT</button>
        </div>
    </div>
  )
}

export default Feedback