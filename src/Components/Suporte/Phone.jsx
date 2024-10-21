import React from 'react'
import styles from './Phone.module.css'
import { FaWhatsapp } from "react-icons/fa6";

const Phone = () => {
  return (
    <section className='flex flex-wrap justify-center items-center'>
      <div className={`${styles.phoneClient} rounded-full text-3xl flex flex-wrap justify-center items-center`}> 
        <span><FaWhatsapp/></span>
      </div>
    </section>
  )
}

export default Phone
