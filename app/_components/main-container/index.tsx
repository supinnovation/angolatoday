
import React from "react"

export default function MainContainer(
  {children, className}:{children:React.ReactNode, className?:string}
){

  return(
    <div className={`
      w-full
      max-w-[1270px]
      m-auto
      
      ${className}
    `}>
        {children}
    </div>
  )
}