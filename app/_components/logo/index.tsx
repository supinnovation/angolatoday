import Image from "next/image";
import Link from "next/link";


export default function Logo({className, dark}: { className?:string, dark?:boolean}){

  return(
    <Link href="/" className={'w-fit h-fit'}>
      <Image alt="Logotipo angola today" src={dark ? "/logo-dark.png" : "/logo-light.png"} width={139} height={59} className={className}/>
    </Link>
  )
}