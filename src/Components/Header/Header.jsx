import React, { useContext } from 'react'
import styles from './Header.module.css'
import Logo1 from '../../Assets/Logo1.png'
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import { NavContext } from '../../NavContext';
import useMedia from '../../Hooks/useMeida'

const Header = () => {
const [config, setConfig]=React.useState(false)
const {menu, setMenu}=useContext(NavContext)

const mediaConfig=useMedia('(max-width:40rem)') 
  return (

    <header className={`${styles.header}`}>  
      <nav className={`${styles.navBar} container py-3`}>

        <div className={styles.logo}>
        <div className={styles.logoKsecu}>
          <img src={Logo1} alt='Erro ao carregar logo'/>
        </div>
        
        {mediaConfig ? <button className={`${styles.chamaMenuEmMobile} text-whiteText bg-Black p-2 rounded-md`} onClick={()=>setMenu(!menu)}><SlArrowRight/></button>
        :
        <button className={styles.menuIcon} onClick={()=>setMenu(!menu)}>  </button>
        }
        </div>
        
        <div className={styles.configuracao}>

        <div className={styles.alert}>
         <span className={styles.alertText}>Alerta</span>
         
         <div className={styles.badgeIcon}>
         <button className={styles.alertIcon}><FaRegBell /></button>
         {/* <span className={styles.badge}></span> */}
         </div>
          </div>

        <div className={styles.config}>
          {mediaConfig ?  <button className={`${styles.btnConfig} text-2xl text-whiteText`} onClick={()=>setConfig(!config)}> <span><IoSettingsOutline/></span></button>  
          :
        <button className={styles.config1} onClick={()=>setConfig(!config)}> <span>Configuracao</span>  
          { config ? <span><IoIosArrowUp/></span> : <span><IoIosArrowDown/></span>}
          </button>
        }
          
         
      {config &&
         <div className={`${styles.configOpen} drop-shadow-sm bg-Bgreen p-3 rounded-md`}>
         <ul className='pt-4 pr-6 flex flex-col gap-2'>

           <li className='flex flex-wrap justify-center items-center gap-1'> 
           <span><MdManageAccounts/></span>
           <span>Gerir Conta</span>
            
           </li>
           <li className='flex flex-wrap items-center gap-1'> 
           <span><IoIosLogOut/></span>
           <span>Sair</span>
            
           </li>
           <li className='flex flex-wrap items-center gap-1'> 
           <span><IoSettingsOutline/></span>
           <span>Sair</span>
            
           </li>
         </ul>
         </div> 
      }
          {/* Menu Configuracoes */}
         

          </div>
          
        </div>

      </nav>
    </header>
  )
}

export default Header
