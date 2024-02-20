import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-20 justify-evenly items-center h-16 px-10 py-12 bg-transparent'>
        <div class=" text-4xl bg-gradient-to-tr from-slate-700 to-white bg-clip-text text-transparent font-extrabold">LEYU</div>
        <ul className='flex gap-10 text-white text-lg font-bold ml-20'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
        </ul>
        <button className='px-4 py-2 border border-blue-400 text-white bg-slate-900'>Register</button>
    </div>
  )
}

export default Navbar