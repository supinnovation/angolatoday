import { home_photos } from "@/app/_tests/json";
import CardModelSimple from "../../card-models/card-model-simple";
import SimpleLegendedContainer from "../../simple-legended-container";
import styles from "./styles.module.css"

export default function CardGroupMoreNews({
  className
} : {
  className?:string
}){

  return(
    <SimpleLegendedContainer title="Mais para ti" topClassName={className} className={styles.area} >
      <div className={styles.gridtop}>
          <CardModelSimple
            title={home_photos[2].title}
            image={home_photos[2].image}
            description={home_photos[2].sub}
          />
          <CardModelSimple
            title={home_photos[1].title}
            image={home_photos[1].image}
            description={home_photos[1].sub}
          />
          <CardModelSimple
            title={home_photos[0].title}
            image={home_photos[0].image}
            description={home_photos[0].sub}
          />
        </div>
        
        <div className={styles.gridtop }>
          <CardModelSimple
            title={home_photos[2].title}
            image={home_photos[2].image}
            description={home_photos[2].sub}
          />
          <CardModelSimple
            title={home_photos[1].title}
            image={home_photos[1].image}
            description={home_photos[1].sub}
          />
          <CardModelSimple
            title={home_photos[0].title}
            image={home_photos[0].image}
            description={home_photos[0].sub}
          />
          <CardModelSimple
            title={home_photos[0].title}
            image={home_photos[0].image}
            description={home_photos[0].sub}
          />
        </div>
    </SimpleLegendedContainer>
  )
}