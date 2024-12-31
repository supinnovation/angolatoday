import CardGroup2 from "../_components/card-groups/card-group-2";
import CardGroupLine from "../_components/card-groups/card-group-line";
import CardGroupMoreNews from "../_components/card-groups/card-group-more-news";

import MoreRead from "../_components/more-read";
import ModelHomeTop from "../_components/news-models/model-home-top";
import HorizontalPublicity from "../_components/publicities/horizontal-publicity";

export default function Page(){

  return(
    <div className="w-full">
      <ModelHomeTop />
      <MoreRead />
      <CardGroup2 />
      <HorizontalPublicity className={' my-[150px]'} />
      <CardGroupLine/>
      <CardGroupMoreNews className="mt-[100px]" />
    </div>
  )
}