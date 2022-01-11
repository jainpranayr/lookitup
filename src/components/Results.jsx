import { useLocation } from "react-router-dom"

import { useResultContext } from "../contexts/ResultContextProvider"

const Results = () => {
  const { loading } = useResultContext()
  const location = useLocation()

  if (loading) return "Loading..."

  switch (location.pathname) {
    case "/search":
      return "Search Results"
    case "/images":
      return "Images Results"
    case "/news":
      return "News Results"
    case "/videos":
      return "Videos Results"
    default:
      return "ERROR"
  }
}

export default Results
