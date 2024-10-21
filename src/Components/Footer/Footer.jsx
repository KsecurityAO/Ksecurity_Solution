import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import styles from './Footer.module.css'
import Logo from '../../Assets/Logo1.png'

const Footer = () => {

  return (

    <footer className='bg-Bgreen rounded-md flex flex-wrap flex-col items-center gap-1'>

    <div className={`${styles.fBody} flex flex-wrap justify-around gap-8 items-start px-3 pt-2`}>

        <div className={styles.footerLogo}>
          <img src={Logo} alt="Carregando logo"/>
          <p className={`${styles.text} slogan text-whiteText pl-1 text-justify `}>Sua seguranca, nossa <span style={{color:'#339941'}}> prioridade</span>.</p>

          
        </div>

        <div className={styles.footerQuemSomos}>
          <h3 className={`${styles.title} text-whiteText`}>Quem Somos</h3>
          <p className={`${styles.text} slogan text-darkGreen text-justify`}>A Ksecurity é uma solução completa de suporte em cibersegurança, projetada para pequenas e médias empresas que buscam proteção robusta contra ameaças digitais.</p>
        </div>

        <div className={styles.footerContactos}>
          <h3 className={`${styles.title} text-whiteText`}>Contactos</h3>
          <p className={`${styles.text} slogan text-darkGreen text-justify flex  items-center `}> 
            <span><IoIosCall/></span> <span>+244 953267566</span>
          </p>

          <p className={`${styles.text} slogan text-darkGreen text-justify flex  items-center`}> 
            <span><IoIosCall/></span> <span>+244 953267566</span>
          </p>

          <p className={`${styles.text} slogan text-darkGreen text-justify flex  items-center gap-1`}> 
            <span><HiOutlineMail /></span> <span>ksecurity@gmail.com</span>
          </p>

           <p className={`${styles.text} slogan text-darkGreen text-justify flex  items-center gap-1`}> 
            <span><HiOutlineMail /></span> <span>ksecurity@gmail.com</span>
          </p>
        </div>

      </div>
        
        
      <div className={` flex gap-2 flex-wrap pb-2`}>
      <div className={`${styles.socialMidia} text-base rounded-full cursor-pointer text-whiteText`} title='LinkedIn'><FaLinkedinIn/></div>
      <div className={`${styles.socialMidia} text-base rounded-full cursor-pointer text-whiteText`} title='Facebook'><FaFacebookF/></div>
      <div className={`${styles.socialMidia} text-base rounded-full cursor-pointer text-whiteText`} title='Instagram'><LuInstagram/></div>
      </div>

    </footer>
  )
}

export default Footer
