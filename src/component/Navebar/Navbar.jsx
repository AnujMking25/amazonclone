import React from 'react'
import Search from './Search'
import Menu from './Menu'
import NavbarLeftSide from './NavbarLeftSide'
import NavbarRightSide from './NavbarRightSide'
const Navbar = () => {
  return (
    <header className='min-w-[800px]'>
        <div className="flex bg-amazonclone text-white h-[60px]">
        {/* Left Side */}
           <NavbarLeftSide/>
            {/* Middle  */}
               <Search/>
            {/* Right Side */}
           <NavbarRightSide/>
        </div>
        <Menu/>
    </header>
  )
}

export default Navbar