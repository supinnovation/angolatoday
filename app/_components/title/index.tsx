import React, { CSSProperties } from "react";
import { fontHeader } from "@/app/_utils/_fonts";
import styles from "./styles.module.css"
import Link from "next/link"

export default function Title({
  children, className, style, limited, href=""
} : { children: React.ReactNode, className?:string, style?: CSSProperties, limited?:boolean, href?:string}){


  return(
    <Link href={href}>
      <h1 className={`
        text-[38px]
        ${styles.area}
       
        ${fontHeader.className}
        ${limited && styles.area_limited}
         ${className}
      `} style={style}>
        {children}
      </h1>
    </Link>
  )
} 