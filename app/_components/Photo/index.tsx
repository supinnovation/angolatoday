import Legend from "./_components/legend";
import Link from "next/link"

export default function Photo({
  alt, src, legends, className, href=""
} : {alt:string, src:string, legends?: string[], className?:string, href?:string}){

  return(
    <div className={"relative"}>
      <Link href={href}>
        <img alt={alt} src={src} className={` ${className} w-full  aspect-video`} />
        <div className={`
            flex flex-row
            absolute
            bottom-[0px]
            gap-[10px]
          `}>
          {legends?.map((e,i) => {
            return(
              <Legend text={e} key={i}/>
            )
          })}
        </div>
      </Link>
      
    </div>
  )
}