import React from 'react'
import Header from './Header'
import Footer from '../Footer/Footer'
import { MdOutlineMail } from "react-icons/md";
import styles from './Suporte.module.css'
import Contacte from './Contacte'
import Perguntas from './Perguntas'

const Suporte = () => {
  return (
    <>
      <section className={`animeLeft containerApp flex flex-wrap flex-col  items-center justify-center gap-8 pt-3`}>

         {/* Header Component */}
        <div className={`${styles.Sheader} w-full`}>
          <Header/>
        </div>
         {/* End Header */}

      {/* Find questions frequentily and Contacts */}
      <div className={` ${styles.contactWrapper} flex flex-wrap justify-around  gap-4`}>
          
        {/* Questions  */}
          <div className={`${styles.Sperguntas} px-4 pb-2 bg-Bgreen-transparent   rounded-md `}>
                  <Perguntas/>
          </div>
        {/* End questios */}

        {/* init Forms for contacts */}
            <div className={`${styles.Scontact} px-4 py-2  bg-Bgreen-transparent rounded-md `}>
                <h3 className={`${styles.title} flex items-center justify-between text-whiteText `}> <span> Contacte nos </span> <span className='text-whiteText'><MdOutlineMail /></span></h3>
                <Contacte/>
            </div>
            {/* End Contacts */}
     </div>
  {/* End Questions and contacts */}

       {/* Icon call */}
   {/* <div className={`${styles.phoneCall} `}>
      <Phone/>
    </div>  */}
    {/* End call */}

    <div className={`${styles.Sfooter}`}>
            <Footer/>
    </div> 
  </section>
    </>
  )
}

export default Suporte
