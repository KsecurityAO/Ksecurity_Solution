import React from 'react'
import styles from './Maquina.module.css'
import AmeacasDetetadas from './AmeacasDetetadas'
import AmeacasBloqueadas from './AmeacasBloqueadas'
import DispBloqueados from './DispBloqueados'
import { LiaSearchSolid } from "react-icons/lia";

const Maquina = () => {
  return (
    <>
        <section className='container animeLeft'>
            <form className={`${styles.inputSearch} flex  justify-center items-center`}>
                <input type="search" placeholder='Procure por nome ou ip' />
                <button className={`${styles.btnProcurar} text-darkGreen`}><LiaSearchSolid/></button>
            </form>

      <div className='flex flex-col flex-wrap md:gap-4 tablet:gap-10 tablet:m-4'>

      <div className={`${styles.wrapperAmeacas}  flex flex-wrap justify-around items-center mt-3 tablet:gap-10 `}>
         <AmeacasDetetadas/>
         <AmeacasBloqueadas/>
      </div>

      <div className={`${styles.wrapperBloq}`}>
         <DispBloqueados/>
      </div>

      </div>
        </section>
    </>
  )
}

export default Maquina
