
import MainContainer from "@/app/_components/main-container"
import Logo from "../logo"
import Settings from "./_components/settings"
import Menu from "./_components/menu"
import styles from "./styles.module.css"
import HorizontalLogo from "./_components/horizontal-logo"

export default function TopBar(){

  
  return(
      <div className={`
        w-full border-b-[var(--color-line)] border-b-[1px] 
        ${styles.topmenu}
      `}>
        <MainContainer >
          <div className="flex w-full items-center justify-between  py-[15px]">
            <div></div> {/* Colocar algo */}
            <Logo />
            <Settings />
          </div>
          
        </MainContainer>
        <MainContainer className="flex flex-row justify-center gap-[32px] pb-[8px]">
            <HorizontalLogo />
            <Menu />
        </MainContainer>
      </div>
  )
}