import MainContainer from "../../main-container";
import LegendedContainer from "../../legended-container"
import CardModelSimple from "../../card-models/card-model-simple"
import { home_photos } from "@/app/_tests/json";
import CardModel1 from '../../card-models/card-model-1'
import styles from "./styles.module.css"
import CardModelHorizontal from "../../card-models/card-model-horizontal";

export default function CardGroup2(){

  return(
    <MainContainer className={`
      flex flex-row mb-[42px] gap-[32px]
      ${styles.area}
    `}>
      <LegendedContainer legend={"Legenda 1"} className={`
          flex-[3]
          pr-[32px]
        `} classLegend={`
          mb-[36px]
        `} classArea={
          `
            flex flex-row gap-[36px]
         
          `
        }>
        <div className={`
            flex
            flex-col
            max-w-[275px]
            ${styles.left}
          `}>
          <CardModelSimple
            legends={['Negócios']}
            image={home_photos[0].image}
            title={home_photos[0].title}
            
          />
           <CardModelSimple
            legends={['Tecnologia']}
            image={home_photos[2].image}
            title={home_photos[2].title}
            
          />
        </div>
        <CardModel1 title={home_photos[1].sub} />
      </LegendedContainer>
      <LegendedContainer legend={"Legenda 2"} className={`
          flex-[1]
        `} 
        classLegend={`
          mb-[36px]
        `}
        classArea={
          `
          flex
          flex-col
          gap-[28px]
          ${styles.right}`
        }
        >
        <CardModelHorizontal 
          image={home_photos[1].image}
          title={home_photos[1].title}
        />
         <CardModelHorizontal 
          image={home_photos[0].image}
          title={home_photos[0].title}
        />
         <CardModelHorizontal 
          image={home_photos[2].image}
          title={home_photos[2].title}
        />
         <CardModelHorizontal 
          image={home_photos[0].image}
          title={home_photos[1].title}
        />
      </LegendedContainer>
    </MainContainer>
  )
}