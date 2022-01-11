import { useLocation } from "react-router-dom"

import { useResultContext } from "../contexts/ResultContextProvider"
import {
  SearchResults,
  ImagesResults,
  NewsResults,
  VideosResults,
  LoadingSpinner,
} from "./utils"

const Results = () => {
  const { loading } = useResultContext()
  const location = useLocation()

  if (loading) return <LoadingSpinner />

  switch (location.pathname) {
    case "/search":
      return <SearchResults />
    case "/images":
      return <ImagesResults />
    case "/news":
      return <NewsResults />
    case "/videos":
      return <VideosResults />
    default:
      return "ERROR"
  }
}

export default Results
