import { ContentColumn2 } from "@/app/_components/card-groups/card-group-2";
import MainContainer from "@/app/_components/main-container";
import LegendedContainer from "@/app/_components/legended-container"
import PostViewArea from "@/app/_components/post-components/post-view-area"
import styles from "./styles.module.css"
import { PublicityArea } from "@/app/_components/news-models/model-home-top";


export default function PostContent(){

  return(
    <MainContainer className="mt-[48px]">
      <div className = {`
          flex flex-row gap-[36px]
        `}>
        <div className={` 
          `}>
          <LegendedContainer legend={"Mais para si"} className={`
            ${styles.fixeds}
            `}>
            <ContentColumn2/>
          </LegendedContainer>
        </div>
        <PostViewArea />
        <div className={"flex-[1]"}>
        <PublicityArea className={`
          ${styles.fixeds}
          top-[calc(var(--space-top)-50px)]
          `}/>
        </div>
        
      </div>
    </MainContainer>
  )
}