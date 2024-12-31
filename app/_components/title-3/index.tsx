import React from "react";
import styles from "./styles.module.css"
import { fontTitle3 } from "@/app/_utils/_fonts";
import Link from "next/link";

export default function Title3({
  children, limited, href=""
} : { children : React.ReactNode, limited?:boolean, href?:string}){

  return( 
    <Link href={href}>
      <h3 className={`
        text-[var(--text-color-primary)]
        text-[18px]
        ${styles.area}
        ${limited && styles.limited}
        ${fontTitle3.className}
       
      `}>
        {children}
      </h3>
    </Link>

  )
}