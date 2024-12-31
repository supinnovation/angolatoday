import MainContainer from "../main-container";
import Logo from "../logo"
import styles from "./styles.module.css"
import LegendedContainer from "../legended-container"
export default function Footer(){

  return(
   <footer className={`
    bg-[var(--color-secondary)]
    text-[var(--text-color-secondary)]
    mt-[130px]
    text-[13px]
    pt-[60px]
    pb-[30px]
   `}>
    <MainContainer>
      <div className={styles.grid}>
        <div className={'flex flex-col gap-[36px]'}>
          <Logo dark/>

          <span>
            We influence 20 million users and is the number one business and technology news network on the planet. Foxiz Daily delivers everything you need to know to live your best life, best tech trend, traveling passion and more…
          </span>
        </div>

        <LegendedContainer legend="Categorias" legendColor={'#222'}>
          <></>
        </LegendedContainer>
        <LegendedContainer legend="Acesso rápido" legendColor={'#222'}>
          <></>
        </LegendedContainer>

      </div>
      <div className={'flex flex-row justify-center'}>
        <span className={'text-[11px]'}>&copy;ANGOLA TODAY. Todos os direitos reservados</span>
      </div>
    </MainContainer>
   </footer>
  )
}