"use client"
import Link from "next/link";
import {useEffect} from "react"

export default function PageIndicator(){

  useEffect(() => {
    if(!window) return;
    console.log(window.location)
  })

  return(
    <div className={`
      flex flex-row
    `}>
      <Link href={""}>
        voltar para
      </Link>
    </div>
  )
}