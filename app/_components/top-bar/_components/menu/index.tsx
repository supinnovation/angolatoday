import { APP_ROUTE } from "@/app/_constants/app-route";
import Link from "next/link";
import styles from "./styles.module.css"
import { fontMenu } from "@/app/_utils/_fonts";


export default function Menu(){


  return(
    <ul className={styles.area} style={{
      ...fontMenu.style,
      fontWeight: '700'
      }}>
        <li>
          <Link href={APP_ROUTE.public.home.path}>
          {APP_ROUTE.public.home.name}
          </Link>
      </li>
      <li>
          <Link href={APP_ROUTE.public.world.path}>
          {APP_ROUTE.public.world.name}
          </Link>
      </li>
      <li>
          <Link href={APP_ROUTE.public.techs.path}>
          {APP_ROUTE.public.techs.name}
          </Link>
      </li>
      <li>
          <Link href={APP_ROUTE.public.insider.path}>
          {APP_ROUTE.public.insider.name}
          </Link>
      </li>
      <li>
          <Link href={APP_ROUTE.public.trend.path}>
          {APP_ROUTE.public.trend.name}
          </Link>
      </li>
    </ul>
  )
}