import React from 'react'

const ContentWrapper = ({children}) => {
  return (
    <div className='max-w-[1280px] mx-auto flex flex-col items-center'>{children}</div>
  )
}

export default ContentWrapper