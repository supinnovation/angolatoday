import { fontMenuSoft } from "@/app/_utils/_fonts"
import styles from "./styles.module.css"


export default function BasicPulbicity(){

  return(
    <div className={styles.area}>
      <span className={styles.label+  `
          ${fontMenuSoft.className}
        `}>-PUBLICIDADE-</span>
      <div 
      
        className= {`
            w-full
            max-w-[277px]
            aspect-square
            bg-[var(--color-secondary)]
          ` }
      />
    </div>
  )
}