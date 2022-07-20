import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useResultContext } from '../contexts/ResultContextProvider'
import { ViewportContextProvider } from '../contexts/ViewportContextProvider'
import { SearchResults, ImagesResults, NewsResults, Loader } from './utils'

const Results = () => {
  const { loading, getResults, searchTerm } = useResultContext()
  const location = useLocation()

  useEffect(() => {
    if (searchTerm) getResults(`${location.pathname}/q=${searchTerm}&num=40`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, location.pathname])

  if (loading) return <Loader />
  if (!searchTerm)
    return <div className='text-center'>Search Something to see results</div>

  return (
    <ViewportContextProvider>
      {(() => {
        switch (location.pathname) {
          case '/search':
            return <SearchResults />
          case '/image':
            return <ImagesResults />
          case '/news':
            return <NewsResults />
          default:
            return 'ERROR'
        }
      })()}
    </ViewportContextProvider>
  )
}

export default Results
