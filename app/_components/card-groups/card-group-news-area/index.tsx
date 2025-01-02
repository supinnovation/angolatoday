import styles from "./styles.module.css"
import FloatImage from "../../float-image"
import PageIndicator from "../../page-indicator"
import Title from "../../title"



export default function CardGroupNewsArea({
  image, title, description
}: {
  image:string, title:string, description:string
}){

  return(
    <div className={`
      flex flex-row justify-between
    `}>
      <div className={`
        flex-1
        flex
        flex-col
        
        justify-end
        gap-[10px]
        `}>
          <PageIndicator />
          <Title className="max-w-[560px]"> {title} </Title>
          <div className={"max-w-[540px] bg-black p-[16px] " + styles.descript}>
            {description}
          </div>
      </div>

      <FloatImage image={image} alt={title}/>
    </div>
  )
}

