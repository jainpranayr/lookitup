import { useDarkModeContext } from "../../contexts/DarkModeContextProvider"
import { useResultContext } from "../../contexts/ResultContextProvider"
import { useViewportContext } from "../../contexts/ViewportContextProvider"
import { truncate } from "./truncate"

const NewsResults = () => {
  const { results } = useResultContext()
  const { width } = useViewportContext()
  const { darkMode } = useDarkModeContext()

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='flex flex-wrap space-y-6 xl:px-40 md:px-20'>
        {results?.map(({ links, id, source, title }) => (
          <div
            key={id}
            className='w-full bg-white dark:bg-gray-800 p-5 rounded-2xl hover:shadow-sm'
          >
            <a href={links[0].href} target='_blank' rel='noreferrer'>
              <p className='text-sm'>{truncate(links[0].href, 30)}</p>
              <h1 className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                {width <= 400 ? truncate(title, 60) : title}
              </h1>
            </a>
            <a
              href={source.href}
              target='_blank'
              rel='noreferrer'
              className='hover:underline text-sm'
            >
              {source.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsResults
