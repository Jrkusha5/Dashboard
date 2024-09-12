import React, { useState } from 'react'
import Sidebar from "./components/Sidebar/Sidebar"
import Main from "./components/Main/Main"

const App = () => {

  const [isOpen, setIsOpen] = useState(true);
  const togglesidebar= ()=>{
    setIsOpen(!isOpen);
  }
  
  return (
    <div className='flex h-screen font-Suse'>
      <Sidebar isOpen={isOpen} togglesidebar={togglesidebar} />
      <div className={`flex-1 transition-all duration-300 ${
        isOpen ? 'ml-52': 'ml-20'}`}>
        <Main/>
      </div>
    </div>
  )
}

export default App