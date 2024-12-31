import { home_photos } from "@/app/_tests/json";
import CardModel1 from "../../card-models/card-model-1";
import CardModelSimple from "../../card-models/card-model-simple";
import MainContainer from "../../main-container";
import styles from "./styles.module.css"
import LegendContainer from "../../legended-container";
import BasicPulbicity from "../../publicities/basic-publicity";


export default function ModelHomeTop(){
  
  return(
    <MainContainer className={`flex flex-row   ${styles.area}`}>
      <div>
          <CardModel1 
            title={` O Governo angolano: Assuntos do 
              ministério das telecomunicações em 
              Angola, tem impactado 
              positivamente todos os sectores, incluindo o sector minério`}
            description={`Novas politíticas têm sido aplicadas para acompanhar o desenvolvimento do potencial tecnologico de diversas empresas angolanas, de diferentes sectores`}
            image={home_photos[0].image}
            href={home_photos[0].href}
          />
      </div>
      <div className={styles.spand + `
          flex flex-col gap-[16px]
        `}>
        <CardModelSimple 
          image={home_photos[1].image}
          title={home_photos[1].title}
          legends={["Legenda 1", "Mais outra"]}
          href={home_photos[1].href}
          
        />
         <CardModelSimple 
          image={home_photos[2].image}
          title={home_photos[2].title}
          legends={["Mais outra"]}
          href={home_photos[2].href}
        />
      </div>
      <div className={styles.spand+` 

        ` } >
        <LegendContainer legend="Legenda do topo" className="flex-[1]">
          <BasicPulbicity />
          <div className={`
              flex flex-col pt-[16px] ${styles.news} gap-[16px]
            `}>
            <CardModelSimple title = {home_photos[1].title} legend="legenda" showdate={false}/>
            <CardModelSimple title = {home_photos[0].title} legend="legenda 2" showdate={false}/>
          </div>
        </LegendContainer>
      </div>
      
    </MainContainer>
  )
}