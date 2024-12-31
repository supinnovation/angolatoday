import Link from "next/link";
import { DateLabel } from "../../notes/note-1";
import Title4 from "../../title-4";
import Image from "next/image"

export default function CardModelHorizontal({
  title, image, href=""
} : {title:string, image:string, date?:string, href?:string}){

  return(
    <div className="flex flex-row gap-[16px]  justify-between pb-[16px]">
      <div className={'flex flex-col justify-between gap-[16px]'}>
        <Title4 
        href={href}
        limited>
          {title}
        </Title4>
        <DateLabel />
      </div>
      <Link href={href}>
        <Image src={image} alt={title}
          width={100} height={100}
          className="min-w-[100px] h-[100px]"
        />
      </Link>
    </div>
  )
}