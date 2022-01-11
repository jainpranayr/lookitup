import { useState } from "react"
import { Navbar, Routing } from "./components"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routing />
      </div>
    </div>
  )
}

export default App
