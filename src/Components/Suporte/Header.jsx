import React from 'react'
import styles from './Header.module.css'
import { LiaSearchSolid } from "react-icons/lia";

const Header = () => {
  return (
    <section className=' bg-Bgreen-transparent rounded-md flex flex-wrap justify-center items-center w-full flex-col py-4'>
           
        <h3 className={styles.h3}> Suporte </h3>
        <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

   </section>
  )
}

export default Header
