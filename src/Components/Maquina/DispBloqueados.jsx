import React from 'react'
import styles from './DispBloqueados.module.css'
import { FaSolarPanel } from "react-icons/fa";

const DispBloqueados = () => {
  return (
    <>
      <section className={`${styles.dispositivos} bg-Bgreen-transparent rounded-md p-3`}>
      <h3 className={`${styles.title}`}>Dispositivos Bloqueados</h3>
       
       <div className='flex flex-wrap gap-5 items-center justify-center'>
      
        <div className={`${styles.dispo1} bg-Bgreen-transparent p-4 rounded-md flex flex-col flex-wrap gap-2`}>

          <div className="cabecalho flex flex-wrap items-center gap-4  border-b-slate-300">
            <span className='bg-Black p-3 text-2xl rounded-full'><FaSolarPanel/></span>
            <span className={styles.user}>user: Guilherme</span>
          </div>

          <div className="cardBody flex flex-wrap items-center text-darkGreen text-sm gap-16 tablet:gap-12">
            <div className='flex flex-wrap flex-col '>
            <span>Sistema</span>
            <span>End. Ip</span>
            <span>End. Mac</span>
            <span>Nivel</span>
            </div>

            <div className='flex flex-wrap flex-col'>
            <span>Windows</span>
            <span>192.168.10.9</span>
            <span>255.255.255.0</span>
            <span className='text-letGreen'>Alto</span>
            </div>
            
          </div>

          <div className="cardFooter">
              <button className={` ${styles.btnLogs} px-4 py-1 bg-letGreen rounded-md transition hover:bg-letGreenHover`}>Logs</button>   
          </div>
   
        </div>
       
        <div className={`${styles.dispo1} bg-Bgreen-transparent p-4 rounded-md flex flex-col flex-wrap gap-2`}>

          <div className="cabecalho flex flex-wrap items-center gap-4">
            <span className='bg-Black p-3 text-2xl rounded-full'><FaSolarPanel/></span>
            <span className={styles.user}>user: Elias</span>
          </div>

          <div className="cardBody flex flex-wrap items-center justify-between text-darkGreen text-sm gap-16 tablet:gap-12 ">
            <div className='flex flex-wrap flex-col '>
            <span>Sistema</span>
            <span>End. Ip</span>
            <span>End. Mac</span>
            <span>Nivel</span>
            </div>

            <div className='flex flex-wrap flex-col'>
            <span>Windows</span>
            <span>192.168.10.9</span>
            <span>255.255.255.0</span>
            <span className='text-red-600'>Alto</span>
            </div>
            
          </div>

          <div className="cardFooter">
              <button className={` ${styles.btnLogs} px-4 py-1 bg-letGreen rounded-md transition hover:bg-letGreenHover`}>Logs</button>   
          </div>
        </div>

        <div className={`${styles.dispo1} bg-Bgreen-transparent p-4 rounded-md flex flex-col flex-wrap gap-2`}>

          <div className="cabecalho flex flex-wrap items-center gap-4  ">
            <span className='bg-Black p-3 text-2xl rounded-full'><FaSolarPanel/></span>
            <span className={styles.user}>user: Julio</span>
          </div>

          <div className={`${styles.cardBody} flex flex-wrap items-center justify-between text-darkGreen text-sm gap-16 tablet:gap-12`}>
            <div className='flex flex-wrap flex-col '>
            <span>Sistema</span>
            <span>End. Ip</span>
            <span>End. Mac</span>
            <span>Nivel</span>
            </div>

            <div className='flex flex-wrap flex-col'>
            <span>Windows</span>
            <span>192.168.10.9</span>
            <span>255.255.255.0</span>
            <span className='text-orange-600'>Alto</span>
            </div>
            
          </div>

          <div className="cardFooter">
              <button className={` ${styles.btnLogs} px-4 py-1 bg-letGreen rounded-md transition hover:bg-letGreenHover`}>Logs</button>   
          </div>
   
        </div>


       </div>

      </section>
    </>
  )
}

export default DispBloqueados
