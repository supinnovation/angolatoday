import { home_photos } from "@/app/_tests/json";
import SimpleLegendedContainer from "../../simple-legended-container";
import CardModelSimple from "../../card-models/card-model-simple";


export default function CardGroupLine(){
  
  return(
    <SimpleLegendedContainer title="Tecnologia e saúde" >
       <CardModelSimple
          image={home_photos[0].image}
          title={home_photos[0].title}
          description={home_photos[0].sub}
        />
        <CardModelSimple 
          image={home_photos[1].image}
          title={home_photos[1].title}
          description={home_photos[1].sub}
        />
        <CardModelSimple 
          image={home_photos[1].image}
          title={home_photos[0].title}
          description={home_photos[1].sub}
        />
        <CardModelSimple 
          image={home_photos[2].image}
          title={home_photos[2].title}
          description={home_photos[2].sub}
        />
    </SimpleLegendedContainer>
  )
}