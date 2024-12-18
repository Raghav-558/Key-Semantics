import React, { useEffect, useState } from 'react'

const BackToTop = () => {
  const [scrollTop, setToTop] = useState(false)
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const setHandler = () => {
    setToTop(window.scrollY > 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', setHandler)
  }, [])

  return (
    <div>
      {scrollTop && (
        <button
          onClick={handleClick}
          className='fixed bottom-5 right-5 bg-light-purple text-white py-4 px-4 rounded-full hover:bg-light-green hover:text-black  transition duration-300'
        >
          
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            fill='currentColor'
            class='bi bi-arrow-up'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5'
            />
          </svg>
        </button>
      )}
    </div>
  )
}

export default BackToTop
