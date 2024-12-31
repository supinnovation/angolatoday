
import CardModelSimple from "../card-models/card-model-simple";
import SimpleLegendedContainer from "../simple-legended-container";
import styles from "./styles.module.css"

export default function MoreRead(){


  return(
    <SimpleLegendedContainer title="Mais lidos." topClassName={`
      ${styles.area}
       mt-[30px]
       min-h-[327px]

    `} >
 
      {
      Array(4).fill(1).map((e,i) =>
      <CardModelSimple 
        
          key={i}
          title={"Testando a apresentação de elementos"}
          description={ `
              Testando a apresentação de descrição em publicações mais relevantes
            ` }
          legend="Legenda "
        />)
        }
      
      
    </SimpleLegendedContainer>
  )
}