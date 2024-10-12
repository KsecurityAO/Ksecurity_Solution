import React from 'react'
import Header from './Header'
import Footer from '../Footer/Footer'
import Phone from './Phone'
import styles from './Suporte.module.css'

const Suporte = () => {
  return (
    <>
      <section className={`containerApp flex flex-wrap flex-col h-lvh justify-start items-center gap-4 w-full pt-3`}>
         {/* Header Component */}
          <Header/>
      
      <div className='flex flex-wrap justify-around items-center border w-full p-3'>
          <div className=' bg-Bgreen-transparent h-40'>
                <h3>Perguntas Frequentes</h3>
                <h3>Suporte</h3>
            </div>

            <div className='bg-Bgreen-transparent h-40'>
                <h3>Instalacao</h3>
                <h3>Assista agora o video de instalacao da solucao</h3>
            </div>
     </div>

    <div className={`${styles.phoneCall}`}>
      <Phone/>
    </div>

    <Footer/>

      </section>
    </>
  )
}

export default Suporte
