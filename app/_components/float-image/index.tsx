import Image from "next/image"
import styles from "./styles.module.css"

export default function FloatImage({
  image, alt
}: {image:string, alt:string}){

  return(
    <div className={`
      relative
      w-[398px]
      h-[278px]
    ` +styles.imagearea}>
       <Image
          src={image}
          alt={alt}
          width={398}
          height={238}
          className={`
              absolute
              blur-[5px]
              ${styles.thumb}
            `}
      />
      <Image
          src={image}
          alt={alt}
          width={398}
          height={238}
          className={`
              absolute
              top-[-20px]
              left-[-40px]
            `}
      />
    </div>
  )
}