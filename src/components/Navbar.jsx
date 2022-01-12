import { Link } from "react-router-dom"

import { DarkModeToggle } from "./utils"

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className='p-3 flex flex-wrap justify-center sm:justify-between items-center border-b dark:border-gray-700 border-gray-200'>
      <div className='flex justify-between items-center space-x-5 w-screen xl:px-40 md:px-20'>
        <Link to='/'>
          <p className='text-2xl font-extrabold'>lookitup</p>
        </Link>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  )
}

export default Navbar
