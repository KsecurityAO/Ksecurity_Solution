import React from 'react'
import styles from './Home.module.css'
import User from '../../Assets/User.png'
import { NavLink } from 'react-router-dom';
import { FaSolarPanel } from "react-icons/fa";
import { GrIntegration } from "react-icons/gr";
import { GrCloudComputer } from "react-icons/gr";
import { PiTreeStructureLight } from "react-icons/pi";
import { TbLogs } from "react-icons/tb";
import { MdBrowserNotSupported } from "react-icons/md";
import Ameacas from './Ameacas/Ameacas'
import AmeacasTop from './Ameacas/AmeacasTop'
import TableMachine from './TableMachine'

const Home = () => {
  return (
    <section className={styles.wrapper}>

    <div className={styles.navBarLeft}>
        <div className={styles.title}>
          <span className={styles.picture}><img src={User} alt="Carregando use" /></span>
          <span className={styles.nome}>Username <small>TypeOfUser</small> </span>
        </div>

        <div className={styles.menus}>

          <div className={styles.bgColor}>
            <NavLink className={styles.menusBody} to='/' end>
                  <span className={styles.menusIcon}>  <span className={styles.spanIcon}><FaSolarPanel/></span></span>
                  <span className={styles.spanTitle}>Painel</span>
            </NavLink>
          </div>
          <div className={`${styles.bgColor}`}>
            <NavLink className={styles.menusBody} to='/'>
                  <span className={styles.menusIcon}>  <span className={styles.spanIcon}><GrIntegration/></span></span>
                  <span className={styles.spanTitle}>Integracao</span>
            </NavLink>
          </div>
          <div className={styles.bgColor}>
            <NavLink className={styles.menusBody}  to='/'>
                  <span className={styles.menusIcon}>  <span className={styles.spanIcon}><GrCloudComputer/></span></span>
                  <span className={styles.spanTitle}>Maquinas</span>
            </NavLink>
          </div>
          <div className={styles.bgColor}>
            <NavLink className={styles.menusBody} to='/'>
                  <span className={styles.menusIcon}>  <span className={styles.spanIcon}><PiTreeStructureLight/></span></span>
                  <span className={styles.spanTitle}>Infaestrutura</span>
            </NavLink>
          </div>
          <div className={styles.bgColor}>
            <NavLink className={styles.menusBody}>
                  <span className={styles.menusIcon}>  <span className={styles.spanIcon}><TbLogs/></span></span>
                  <span className={styles.spanTitle}>Logs</span>
            </NavLink>
          </div>
          <div className={styles.bgColor}>
            <NavLink className={styles.menusBody}>
                  <span className={styles.menusIcon}>  <span className={styles.spanIcon}><MdBrowserNotSupported/></span></span>
                  <span className={styles.spanTitle}>Suporte</span>
            </NavLink>
          </div>
        </div>
    </div>

    <div className={`${styles.main} grid grid-cols-1 wrapperApp`}>

        <div className='flex flex-col flex-wrap gap-8 py-4 px-12 mb-10'>

          <Ameacas/>
          <AmeacasTop/>
          <TableMachine/>
          </div>
    
    </div>

    </section>
  )
}

export default Home
