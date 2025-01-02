
import CardModelSimple from "@/app/_components/card-models/card-model-simple";
import { PostObject } from "@/app/_types/post-object";
import CostumizedSimpleLegendedContainer from "@/app/_components/costumized-simple-legended-container";

export default function MoreNews({
  title, content, className
} : {title:string, content: PostObject[], className?:string}){

  return(
    <CostumizedSimpleLegendedContainer title={title} className={className}>
    { content.map(
      (e, i) => {
          const {title, sub, image, href} = e //melhoar isso
        return <CardModelSimple
          title={title}
          image={image}
          description={sub}
          href={href}
          key={i}
          />
      }
    )   }
      
  </CostumizedSimpleLegendedContainer>
  )
}