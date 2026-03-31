import React from 'react'
import ThemeToggle from './Theme.jsx';

const Navbar = () => {
  return (
    <section className='fixed top-0 left-0 w-full z-50 flex py- px-6 items-center bg-black/50 backdrop-blur-md'>

      <div className='max-w-173 w-full mx-auto flex py-6 px-6 items-center justify-between'>

        <span className=' text-sm  text-gray-300'>
          <span className=''>
            ~/
          </span>
          adinath.codes
        </span>

        <ul className=' flex gap-6 items-center text-[12px]  md:text-[14px]  mr-2.75 text-white'>
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
        </ul>
      </div>
      <ThemeToggle />
    </section>
  )
}

export default Navbar;
