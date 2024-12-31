import MainContainer from "../main-container";
import Title4 from "../title-4";

import styles from "./styles.module.css"
import { ReactNode } from "react";

export default function SimpleLegendedContainer({children, className, title, topClassName} : {
  children: ReactNode, className?:string, title?:string, topClassName?:string
}){


  return(
    <MainContainer className={'border-t-[2px] border-[var(--color-secondary)] pt-[10px] flex flex-col gap-[32px] '+topClassName}>
      <Title4>
        {title}
      </Title4>
      <div className={styles.grid + " "+className}>
        {children}
      </div>
    </MainContainer>
  )
}