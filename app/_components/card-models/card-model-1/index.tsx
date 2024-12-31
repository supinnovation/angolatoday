
import Photo from "../../Photo";
import Title from "../../title";
import Note1, { DateLabel } from "../../notes/note-1";


export default function CardModel1({
  title, description, href="", image
}: {title:string, description?:string, href?:string, image:string}) {

  
  return(
    <div className={'w-full max-w-[614px]'} >
      <Photo
          src={image}
          legends={["Legenda", "Legenda", "Legenda"]}
          alt={title}
          className="min-h-[368px]"
          href={href}
      />
      <div className={`flex  p-[20px] gap-[42px] justify-between ${description ? "flex-row" : "flex-col pl-[0px]" } `}>
          <div className={description ? "max-w-[300px]" : ""}>
            <Title className={"w-full "} limited href={href}>
             {title}
            </Title>
          </div>
        {!description &&  <DateLabel />}
        {description && <Note1 text={description}/>}
      </div>
    </div>
  )
}