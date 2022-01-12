import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { useResultContext } from "../contexts/ResultContextProvider"
import {
  SearchResults,
  ImagesResults,
  NewsResults,
  VideosResults,
  Loader,
} from "./utils"

const Results = () => {
  const { loading, getResults } = useResultContext()
  const location = useLocation()

  useEffect(() => {
    getResults("/search/q=Elon Musk&num=40")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <Loader />

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
