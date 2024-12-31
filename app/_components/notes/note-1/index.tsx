
import { fontMenuSoft } from "@/app/_utils/_fonts"
import styles from "./styles.module.css"
export default function Note1(
  {className, text} : {className?:string, text?:string}
){

  return(
    <div className={`

      ${styles.area}
      ${className}
      
    `}>
     <DateLabel className={styles.putafter}/>
      <span className={styles.descript} style={{
      
      }}>
        {text}
      </span>
    </div>
  )
}

export const DateLabel = ({
  className, postcolor
} : {className?:string, postcolor?:string}) => {

  return(
    <div className={`${fontMenuSoft.className} ${styles.legend} ${className}`} style={{
      fontSize: '10px'
    }}>
        <span style={!postcolor ? {} : {color: postcolor}}>Publicado |</span>🌍<span>25 de Dezembro de 2024</span>
    </div>
  )
}