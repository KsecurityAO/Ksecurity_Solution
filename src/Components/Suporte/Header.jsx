import React from 'react'
import styles from './Header.module.css'
import { LiaSearchSolid } from "react-icons/lia";

const Header = () => {
  return (
    <section className=' bg-Bgreen-transparent rounded-md flex flex-wrap justify-center items-center flex-col w-full py-4'>
           
        <h3 className={styles.h3}> <span>K</span>Security Pro</h3>
        <h4>Em que podemos ajudar</h4>
        
        <form className={`${styles.inputSearch}`}>
            <input type="search" placeholder='Procure por nome ou ip' />
            <button className={`${styles.btnProcurar} text-darkGreen`}><LiaSearchSolid/></button>
        </form>

   </section>
  )
}

export default Header
