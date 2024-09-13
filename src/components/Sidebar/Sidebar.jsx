import React from 'react'
import { GiFireDash } from 'react-icons/gi'
import {menuList} from '../../constants'
import { FaTimes , FaBars} from 'react-icons/fa'




const Sidebar = ({togglesidebar, isOpen}) => {
  return (
  <div className={`bg-gray-800 text-white p-5 fixed top-0 left-0 h-full
   flex flex-col justify-between ${isOpen ? "w-52" : "w-20"} duration-300`}>
  <div className={`${isOpen ? "" : "flex flex-col items-center justify-center"} duration-300`}>
          {/*  logo */}
      <div className='flex items-center justify-center gap-4'>
      <GiFireDash  className='text-3xl cursor-pointer hover:text-gray-400' />
      <span className={`text-2xl ${isOpen ? "" : "hidden"} duration-300`}>DashBoard</span>
      </div>

      {/*  menu list */}
      <nav className='mt-20'>
        <ul className='flex flex-col gap-6'>
          
            {menuList.map((item, index)=>(
                <li key={index} className='flex items-center gap-3 cursor-pointer
                hover:text-gray-400'>
                  {item.icon}
                  <span className={`${isOpen ? "" : "hidden"} duration-300`}>{item.name}</span>

                </li>
            ))
            }
          
        </ul>
      </nav>
      </div>

      {/*  toggle button */}
      <div className='flex items-center justify-center p-3 cursor-pointer
      hover:bg-gray-700 ' onClick={togglesidebar}>
        {isOpen ? <FaTimes/> : <FaBars/>}
      </div>
    </div>
  
  )
}

export default Sidebar