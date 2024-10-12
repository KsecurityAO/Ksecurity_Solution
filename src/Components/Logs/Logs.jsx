import React from 'react'
import styles from './Logs.module.css'
import AmeacasBloqueadas from '../Maquina/AmeacasBloqueadas'
import { LiaSearchSolid } from "react-icons/lia";
import MaquinasEmQuarentena from './MaquinasEmQuarentena'


const Logs = () => {
  return (
    <>
      <section>
      <form className={`${styles.inputSearch} flex  justify-center items-center pt-4`}>
                <input type="search" placeholder='Procure por nome ou ip' />
                <button className={`${styles.btnProcurar} text-darkGreen`}><LiaSearchSolid/></button>
            </form>

      <div className='flex flex-col flex-wrap gap-4 animeLeft'>

      <div className={`${styles.wrapperAmeacas}  flex flex-wrap justify-around items-start mt-3 gap-6`}>
         <MaquinasEmQuarentena/>
         <AmeacasBloqueadas/>
      </div>

      </div>
      </section>
    </>
  )
}

export default Logs
