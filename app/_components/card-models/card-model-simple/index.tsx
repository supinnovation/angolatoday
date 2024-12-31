import { fontMenu } from "@/app/_utils/_fonts";
import Photo from "../../Photo";
import Title2 from "../../title-2";
import {DateLabel} from "@/app/_components/notes/note-1"
import styles from "./styles.module.css"

export default function CardModelSimple({
  legends, image, title, description, className, legend, showdate=true
} : { legends?:string[], image?:string, title:string, description?:string, className?:string, legend?:string, showdate?:boolean}){

  return(
    <div className={`
      w-full
      
      flex
      flex-col
      gap-[16px]
      pb-[16px]
      ${className}
    `}>
      {image && <Photo 
        legends={legends}
        alt={title}
        src={image} 
      />}
      <div className={`flex flex-col gap-[10px] ${(description && image) && styles.titlearea }`}>
        <div className="flex flex-col">
          <span className={`
            ${fontMenu.className}
            text-[10px]
            uppercase 
          `} style={{
            letterSpacing: '0.3em',
            
          }}>
            {legend} 
          </span>
          <Title2 limited>
            {title}
          </Title2>
        </div>
        
      </div>

      {description && <span className={"text-[12px] mt-[8px] "+styles.description}>{description}</span>}
      {showdate && <DateLabel />}
    </div>
  )
}