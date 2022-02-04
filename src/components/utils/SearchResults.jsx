import { useResultContext } from "../../contexts/ResultContextProvider"
import { useViewportContext } from "../../contexts/ViewportContextProvider"
import { truncate } from "./truncate"

const SearchResults = () => {
  const { results } = useResultContext()
  const { width } = useViewportContext()

  return (
    <div className='flex flex-wrap space-y-6 xl:px-40 md:px-20'>
      {results?.results?.map(({ link, title, description }, idx) => (
        <div
          key={idx}
          className='w-full bg-white dark:bg-gray-800 p-5 rounded-2xl hover:shadow-sm'
        >
          <a href={link} target='_blank' rel='noreferrer'>
            <p className='text-sm'>{truncate(link, 30)}</p>
            <h1 className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
              {title}
            </h1>
            <p>
              {width <= 400
                ? truncate(description, 80)
                : width <= 640
                ? truncate(description, 100)
                : width <= 768
                ? truncate(description, 200)
                : width <= 1024
                ? truncate(description, 300)
                : width <= 1280
                ? truncate(description, 400)
                : description}
            </p>
          </a>
        </div>
      ))}
    </div>
  )
}

export default SearchResults
