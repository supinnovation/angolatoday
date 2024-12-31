import React from "react";
import styles from "./styles.module.css"
import { fontHeader2 } from "@/app/_utils/_fonts";
import Link from "next/link";

export default function Title2({
  children, limited, href="", className
} : { children : React.ReactNode, limited?:boolean, href?:string, className?:string}){

  return( 
    <Link href={href}>
      <h2 className={`
        text-[var(--text-color-primary)]
        text-[19px]
        
        ${styles.area}
        ${limited && styles.limited}
        ${fontHeader2.className}
        ${className }
      `}>
        {children}
      </h2>
    </Link>

  )
}