
import CardGroupNewsArea from "@/app/_components/card-groups/card-group-news-area"
import MainContainer from "@/app/_components/main-container"
import { home_photos } from "@/app/_tests/json"
// import { Metadata } from "next"
import {APP_ROUTE} from "@/app/_constants/app-route"
import { RouteObject } from "@/app/_types/route-object"
import MoreNews from "./_components/more-news"

interface NewsProps {
 params: Promise<{type:string}>
}



// export async function generatedMetada({params} : NewsProps) : Promise<Metadata>{


//   return {
//     title: home_photos[0].title
//   }
// }


export default async function News({params}: NewsProps){
  const type = (await params).type
  const pub = APP_ROUTE.public as unknown as RouteObject[]
  const local = pub[type as unknown as number]

  return(

    <MainContainer className="mt-[48px]">
      <CardGroupNewsArea
        image={home_photos[0].image}
        title={home_photos[0].title}
        description={local.description}
      />

        <MoreNews title={local.name} content={[...home_photos, ...home_photos]} className={'mt-[48px]'} />
    </MainContainer>
  )
}