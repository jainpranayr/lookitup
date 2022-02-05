import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { useResultContext } from "../contexts/ResultContextProvider"
import { ViewportContextProvider } from "../contexts/ViewportContextProvider"

import {
  SearchResults,
  ImagesResults,
  NewsResults,
  VideosResults,
  Loader,
} from "./utils"

const Results = () => {
  const { loading, getResults, searchTerm } = useResultContext()
  const location = useLocation()

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(`/search/q=${searchTerm} videos`)
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, location.pathname])

  if (loading) return <Loader />

  return (
    <ViewportContextProvider>
      {(() => {
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
      })()}
    </ViewportContextProvider>
  )
}

export default Results
