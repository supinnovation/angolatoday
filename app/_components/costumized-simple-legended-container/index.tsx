import { ReactNode } from "react";
import SimpleLegendedContainer from "../simple-legended-container";
import styles from "./styles.module.css"

export default function CostumizedSimpleLegendedContainer({
  title, children, className
} : {title:string, children: ReactNode, className?:string}){

  return(
    <SimpleLegendedContainer 

    title={title}
    className={styles.area }
    topClassName={className}
    >
      {children}
    </SimpleLegendedContainer>
  )
}