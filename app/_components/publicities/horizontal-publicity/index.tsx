import {fontHeader} from "@/app/_utils/_fonts"

export default function HorizontalPublicity({
  className
}: {className?:string}){

  return(
    <div
      className={`
          w-full m-auto max-w-[1100px] h-[210px] bg-[var(--color-secondary)]
          text-[var(--text-color-secondary)] p-[16px]
          flex flex-row ${className}
        `}
    >
      <div className={"flex-1  flex flex-col justify-center p-[32px]"} style={{
        border: '2px dashed white',

        
      }}>
        <h1 className={`
            ${fontHeader.className} font-[800] uppercase max-w-[300px] text-[28px] 
          `} style={{
            letterSpacing: "-1px",
          }}>
            Faça, aqui, a publicidade para a tua marca
        </h1>
      </div>
    </div>
  )
}