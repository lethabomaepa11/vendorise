
import Image from 'next/image'
import React from 'react'

const LoadingUI = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
        <Image
            src="/logo.png"
            width={300}
            height={300}
            alt="logo"
            className="animate-bounce"
        />
        <p className='text-lg font-bold text-gray-500 animate-bounce text-pretty'>Loading...</p>
    </div>
    )
}

export default LoadingUI
