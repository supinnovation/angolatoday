import MainContainer from "@/app/_components/main-container";
import PhotoView from "@/app/_components/photo-view";
import { home_photos } from "@/app/_tests/json";




export default async function View({
  params
} : {
  params: Promise<{id:string}>
}){

  const id = (await params).id
  const numid = parseInt(id, 10)
  return(
    <MainContainer className="pt-[22px]">
      <PhotoView 
        image={home_photos[numid].image}
        alt={home_photos[numid].title}
        title={home_photos[numid].title}
        description={home_photos[numid].sub}
      />
    </MainContainer>
  )
}