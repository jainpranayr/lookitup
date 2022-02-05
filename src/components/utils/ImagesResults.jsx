import { useDarkModeContext } from "../../contexts/DarkModeContextProvider"
import { useResultContext } from "../../contexts/ResultContextProvider"
import { useViewportContext } from "../../contexts/ViewportContextProvider"
import { truncate } from "./truncate"

const ImageResults = () => {
  const { results } = useResultContext()
  const { width } = useViewportContext()
  const { darkMode } = useDarkModeContext()

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4'>
          {results?.map(({ image, link: { href, title } }, idx) => (
            <a
              href={href}
              className='p-3'
              key={idx}
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={image?.src}
                alt={title}
                loading='lazy'
                className='w-36 h-28 md:w-40 md:h-44 object-cover rounded-sm shadow border-2 border-solid border-white'
              />
              <p className='break-words text-sm mt-2 w-40'>
                {width <= 400
                  ? truncate(title, 20)
                  : width <= 640
                  ? truncate(title, 30)
                  : width <= 768
                  ? truncate(title, 40)
                  : title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageResults
