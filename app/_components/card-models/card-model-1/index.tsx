import { home_photos } from "@/app/_tests/json";
import Photo from "../../Photo";
import Title from "../../title";
import Note1, { DateLabel } from "../../notes/note-1";


export default function CardModel1({
  title, description
}: {title:string, description?:string}) {

  const data = home_photos[0]
  return(
    <div className={'w-full max-w-[614px]'} >
      <Photo
          src={data.image}
          legends={["Legenda", "Legenda", "Legenda"]}
          alt={data.title}
          className="min-h-[368px]"
      />
      <div className={`flex  p-[20px] gap-[42px] justify-between ${description ? "flex-row" : "flex-col pl-[0px]" } `}>
          <div className={description ? "max-w-[300px]" : ""}>
            <Title className={"w-full "} limited>
             {title}
            </Title>
          </div>
        {!description &&  <DateLabel />}
        {description && <Note1 text={description}/>}
      </div>
    </div>
  )
}