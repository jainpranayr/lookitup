import { useDarkModeContext } from "../../contexts/DarkModeContextProvider"

const VideoResults = () => {
  const { darkMode } = useDarkModeContext()

  return (
    <div className={darkMode ? "dark" : ""}>Video Results will appear here</div>
  )
}

export default VideoResults
