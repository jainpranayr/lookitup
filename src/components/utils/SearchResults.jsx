import { useEffect, useState } from "react"

const SearchResults = ({ results }) => {
  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className='flex flex-wrap space-y-6 xl:px-40 md:px-20'>
      {results?.results?.map(({ link, title, description }, idx) => (
        <div
          key={idx}
          className='w-full bg-white dark:bg-gray-800 p-5 rounded-2xl hover:shadow-sm'
        >
          <a href={link} target='_blank' rel='noreferrer'>
            <p className='text-sm'>
              {link?.length > 30 ? link.substring(0, 30) : link}
            </p>
            <h1 className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
              {title}
            </h1>
            <p>
              {width <= 400
                ? description.substring(0, 80)
                : width <= 640
                ? description.substring(0, 100)
                : width <= 768
                ? description.substring(0, 200)
                : width <= 1024
                ? description.substring(0, 300)
                : width <= 1280
                ? description.substring(0, 400)
                : description}
            </p>
          </a>
        </div>
      ))}
    </div>
  )
}

export default SearchResults
