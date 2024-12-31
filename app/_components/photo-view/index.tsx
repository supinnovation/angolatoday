import Image from "next/image";
import Title from "../title";
import styles from "./styles.module.css"
import Logo from "../logo";
import { DateLabel } from "../notes/note-1";

export default function PhotoView({
  image, alt, title, description, legends
} : {
  image:string, alt:string, title:string, description?:string, legends?:string[]
}){

  return(
    <div className="w-full h-fit relative">
      <Image 
        src={image}
        width={300}
        height={300}
        alt={alt}
        className="w-full aspect-video"
      />
      <Description title={title} description={description} legends={legends}/>
     
    </div>
  )
}


const Description = ({
  title, description
} : {
  title:string, description?:string, legends?:string[]
}) => {

  return(
    <div className={`
      absolute
      h-full
      max-h-[300px]
      w-full
      
      bg-black
      bottom-[0px]
      p-[32px]
      pb-[16px]
      flex
      flex-col
      justify-between
    `} style={{ maxWidth: '800px',}}>
      <div style={{
         
          display: "flex",
          flexDirection: 'column',
          gap: '19px'
        }}>
        <Title style={{
          color: '#fff',
          fontSize: '42px'
        }} limited>
          {title}
        </Title>
        <DateLabel postcolor={'#eee'}/>
        <span style={{
          fontSize: '18px',
          color: '#ddd',
          fontWeight: '500'
          
        }} className={styles.limited}>
          {description}
        </span>
        </div>
        <div className="flex items-end gap-[22px] text-[#ddd]">

          <Logo dark className="w-[120px] h-[49px]"/>
        
        </div>
      
    </div>
  )
}