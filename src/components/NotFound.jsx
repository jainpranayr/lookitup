import { useNavigate } from "react-router-dom"
import { useDarkModeContext } from "../contexts/DarkModeContextProvider"

const NotFound = () => {
  const { darkMode } = useDarkModeContext()
  const navigate = useNavigate()

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='text-center text-lg'>
        <div className='flex gap-4 justify-center items-center mt-10'>
          <svg
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10 15.9375C10 16.5058 10.2258 17.0509 10.6276 17.4527C11.0295 17.8546 11.5745 18.0804 12.1429 18.0804C12.7112 18.0804 13.2562 17.8546 13.6581 17.4527C14.06 17.0509 14.2857 16.5058 14.2857 15.9375C14.2857 15.3692 14.06 14.8241 13.6581 14.4223C13.2562 14.0204 12.7112 13.7946 12.1429 13.7946C11.5745 13.7946 11.0295 14.0204 10.6276 14.4223C10.2258 14.8241 10 15.3692 10 15.9375V15.9375ZM25.7143 15.9375C25.7143 16.5058 25.9401 17.0509 26.3419 17.4527C26.7438 17.8546 27.2888 18.0804 27.8571 18.0804C28.4255 18.0804 28.9705 17.8546 29.3724 17.4527C29.7742 17.0509 30 16.5058 30 15.9375C30 15.3692 29.7742 14.8241 29.3724 14.4223C28.9705 14.0204 28.4255 13.7946 27.8571 13.7946C27.2888 13.7946 26.7438 14.0204 26.3419 14.4223C25.9401 14.8241 25.7143 15.3692 25.7143 15.9375V15.9375ZM20 0C8.95536 0 0 8.95536 0 20C0 31.0446 8.95536 40 20 40C31.0446 40 40 31.0446 40 20C40 8.95536 31.0446 0 20 0ZM31.7411 31.7411C30.2143 33.2679 28.4375 34.4643 26.4598 35.3036C24.4196 36.1696 22.2455 36.6071 20 36.6071C17.7545 36.6071 15.5804 36.1696 13.5357 35.3036C11.561 34.4696 9.76733 33.2597 8.25446 31.7411C6.72768 30.2143 5.53125 28.4375 4.69196 26.4598C3.83036 24.4196 3.39286 22.2455 3.39286 20C3.39286 17.7545 3.83036 15.5804 4.69643 13.5357C5.53039 11.561 6.74034 9.76733 8.25893 8.25446C9.78571 6.72768 11.5625 5.53125 13.5402 4.69196C15.5804 3.83036 17.7545 3.39286 20 3.39286C22.2455 3.39286 24.4196 3.83036 26.4643 4.69643C28.439 5.53039 30.2327 6.74034 31.7455 8.25893C33.2723 9.78571 34.4688 11.5625 35.308 13.5402C36.1696 15.5804 36.6071 17.7545 36.6071 20C36.6071 22.2455 36.1696 24.4196 35.3036 26.4643C34.4706 28.4382 33.2605 30.2306 31.7411 31.7411V31.7411ZM26.7857 22.3661H13.2143C13.0179 22.3661 12.8571 22.5268 12.8571 22.7232V24.8661C12.8571 25.0625 13.0179 25.2232 13.2143 25.2232H26.7857C26.9821 25.2232 27.1429 25.0625 27.1429 24.8661V22.7232C27.1429 22.5268 26.9821 22.3661 26.7857 22.3661Z'
              fill='currentColor'
            />
          </svg>
          <p>Page Not Found</p>
        </div>
        <p
          className='mt-6 cursor-pointer hover:underline'
          onClick={() => navigate("/")}
        >
          Return to '/'
        </p>
      </div>
    </div>
  )
}

export default NotFound
