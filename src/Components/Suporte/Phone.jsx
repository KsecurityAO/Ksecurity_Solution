import React from 'react'
import styles from './Phone.module.css'
import { TbPhoneCall } from "react-icons/tb";

const Phone = () => {
  return (
    <section className='flex flex-wrap justify-center items-center'>
      <div className={`${styles.phoneClient} rounded-full p-6 flex flex-wrap justify-center items-center`}> 
        <TbPhoneCall/> 
      </div>
    </section>
  )
}

export default Phone
