import { fontTitle3 } from "@/app/_utils/_fonts"
import styles from "./styles.module.css"
import React from "react"

export default function LegendContainer({
  children, className, legend, classLegend, classArea, legendColor='var(--color-secondary)'
} : {children?: React.ReactNode, className?:string, legend:string, classLegend?:string, classArea?:string, legendColor?:string}){

  return(
    <div className={`
      
      ${styles.area}
      ${className} 
    `}>
      <div className={styles.legend+ " " + classLegend} style={{
        borderColor: legendColor
      }}>
      <span 
        style={{
          borderColor: legendColor,
          backgroundColor: legendColor
        }}
      className={`
          text-[var(--text-color-secondary)]
          ${fontTitle3.className}
        `} >{legend}</span>
      </div>
      <div className={classArea}>
        {children}
      </div>

      
    </div>
  )
}