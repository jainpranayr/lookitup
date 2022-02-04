import { useResultContext } from "../../contexts/ResultContextProvider"
import { useViewportContext } from "../../contexts/ViewportContextProvider"
import { truncate } from "./truncate"

const ImageResults = () => {
  const { results } = useResultContext()
  const { width } = useViewportContext()

  return (
    <div className='flex items-center justify-center'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-6 gap-2'>
        {results?.image_results?.map(
          ({ image, link: { href, title } }, idx) => (
            <a
              href={href}
              className='sm:p-3 p-5'
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
              <p className='break-words text-sm mt-2'>
                {width <= 400
                  ? truncate(title, 20)
                  : width <= 640
                  ? truncate(title, 30)
                  : width <= 768
                  ? truncate(title, 40)
                  : title}
              </p>
            </a>
          )
        )}
      </div>
    </div>
  )
}

export default ImageResults
