"use client"
import Logo from "@/app/_components/logo";
import { useEffect, useState } from "react";
import styles from "./styles.module.css"


export default function HorizontalLogo(){

  const [show, setShow] = useState(false)
  useEffect( () => {
    if(!window) return
    window.document.addEventListener("scroll", ()=> {
      setShow(window.scrollY > 80)
    })
  })
  return(
    show && <Logo className={"w-[120px] aspect-auto "+styles.area}/>
  )
}