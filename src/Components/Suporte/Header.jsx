import React from 'react'
import styles from './Header.module.css'
import { LiaSearchSolid } from "react-icons/lia";

const Header = () => {
  return (
    <section className=' bg-Bgreen-transparent rounded-md flex flex-wrap justify-center items-center w-full flex-col py-4'>
           
        <h3 className={styles.h3}> Suporte </h3>
        <p>Em que podemos ajudar por agora ?</p>
        
        <form className={`${styles.inputSearch}`}>
            <input type="search" placeholder='Informe aqui por favor' />
            <button className={`${styles.btnProcurar} text-darkGreen`}><LiaSearchSolid/></button>
        </form>

   </section>
  )
}

export default Header
