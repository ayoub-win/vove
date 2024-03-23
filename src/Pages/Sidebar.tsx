
//Icons
import { useState } from "react";
import { RiHome3Fill, RiMore2Fill, RiCloseFill  } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { PiWebhooksLogo } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import '../index.css';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
   <div className="sidebar">
    <div className={`bg-primary-900 h-full fixed lg:static w-[80%] md:w-[60%] lg:w-full transition-all z-50 duration-300 ${showMenu ? "left-0" : "-left-full"}`}>
      <div className='flex flex-col items-center justify-center p-8 gap-2 h-[30vh]'>
        <h1 className='text-xl text-white font-bold'>VOVE</h1>
      </div>
      {/* NAV */}
       <div className='bg-primary-600 p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between'>
       <nav className='flex flex-col gap-5' > 
         <a href='#' className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'><RiHome3Fill /> Dashboard </a>
         <a href='#' className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'><FiUsers/> Users </a>
         <a href='#' className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'><PiWebhooksLogo /> Webhooks </a>
         <a href='#' className='flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'><CiSettings  /> Settings </a>
        </nav>
        <div className='bg-primary-900/50 text-white p-4 rounded-xl'>
          <p className='text-gray-400'>Having troubles?</p>
          <a href='#'> Contact Us</a>
        </div>
       </div>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className='lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50' >
         {showMenu ?<RiCloseFill/> : <RiMore2Fill/> }</button>
   </div>
  )
}

export default Sidebar;