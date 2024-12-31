import { fontMenuSoft } from "@/app/_utils/_fonts";

export interface ILegend {
  text?:string
}
export default function Legend({text}: ILegend){
  return(
    <div 
    style={{
      letterSpacing: 'var(--space-letter)'
    }}
    className={`text-[10px]
      
      w-space-[4px]
    text-white ${fontMenuSoft.className} bg-[var(--color-enphase)] w-fit h-fit p-[5px] uppercase`}>
      {text}
    </div>
  )
}