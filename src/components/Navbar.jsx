import { Link } from "react-router-dom"
import { DarkModeToggle } from "./utils"

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap justify-center sm:justify-between items-center border-b dark:border-gray-700 border-gray-200'>
      <div className='flex justify-between items-center space-x-5 w-screen'>
        <Link to='/'>
          <p className='text-2xl font-bold'>
            LOOK<span className='text-blue-700 ml-1'>UP</span>
          </p>
        </Link>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  )
}

export default Navbar
