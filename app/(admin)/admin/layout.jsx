import BackButton from "@/app/components/BackButton"
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='-mt-[70px]'>
      <BackButton/>
      {children}
    </div>
  )
}

export default layout
