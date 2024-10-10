import React from 'react'
import styles from './Home.module.css'
import User from '../../Assets/User.png'
import {Routes,Route, NavLink } from 'react-router-dom';
import { FaSolarPanel } from "react-icons/fa";
import { GrIntegration } from "react-icons/gr";
import { GrCloudComputer } from "react-icons/gr";
import { PiTreeStructureLight } from "react-icons/pi";
import { TbLogs } from "react-icons/tb";
import { MdBrowserNotSupported } from "react-icons/md";
import Dashboard from './Dashboard'
import Header from '../../Components/Header/Header'
import Maquina from '../Maquina/Maquina'
import Infraestrutura from '../Infraestrutura/Infraestrutura'
import Logs from '../Logs/Logs'
import Suporte from '../Suporte/Suporte'
import { NavContext } from '../../NavContext';
import Integracao from '../Integracao/Integracao';
import Fundo from '../../Assets/fundo/video.mp4'

export const  Home = () => {
  
  const {menu}=React.useContext(NavContext)
  return (
    <>

     {/* Include Header */}
      <Header/>     
     {/* End Header */}
    
    <section className={`${menu ? styles.wrapper : styles.wrapperNotMenu}`}>
  { menu && 
      <div className={`${styles.navBarLeft} animeLeft`}>
        <div className={styles.title}>
          <span className={styles.picture}><img src={User} alt="Carregando use" /></span>
          <span className={styles.nome}>Username <small>TypeUser</small> </span>
        </div>

        <div className={styles.menus}>

          <div className={styles.bgColor}>
            <NavLink className={styles.menusBody} to='/' end>
                  <span className={styles.menusIcon}>  <span className={styles.spanIcon}><FaSolarPanel/></span></span>
                  <span className={styles.spanTitle}>Painel</span>
            </NavLink>
          </div>
          <div className={`${styles.bgColor}`}>
            <NavLink className={styles.menusBody} to='/integracao'>
                  <span className={styles.menusIcon}>  <span className={styles.spanIcon}><GrIntegration/></span></span>
                  <span className={styles.spanTitle}>Integracao</span>
            </NavLink>
          </div>
          <div className={styles.bgColor}>
            <NavLink className={styles.menusBody}  to='/maquinas'>
                  <span className={styles.menusIcon}>  <span className={styles.spanIcon}><GrCloudComputer/></span></span>
                  <span className={styles.spanTitle}>Maquinas</span>
            </NavLink>
          </div>
          <div className={styles.bgColor}>
            <NavLink className={styles.menusBody} to='/infraestrutura'>
                  <span className={styles.menusIcon}>  <span className={styles.spanIcon}><PiTreeStructureLight/></span></span>
                  <span className={styles.spanTitle}>Infaestrutura</span>
            </NavLink>
          </div>
          <div className={styles.bgColor}>
            <NavLink className={styles.menusBody} to='logs'>
                  <span className={styles.menusIcon}>  <span className={styles.spanIcon}><TbLogs/></span></span>
                  <span className={styles.spanTitle}>Logs</span>
            </NavLink>
          </div>
          <div className={styles.bgColor}>
            <NavLink className={styles.menusBody} to='suporte'>
                  <span className={styles.menusIcon}>  <span className={styles.spanIcon}><MdBrowserNotSupported/></span></span>
                  <span className={styles.spanTitle}>Suporte</span>
            </NavLink>
          </div>
        </div>
    </div>
  }

        <div className='wrapperHome'>
           <video autoPlay loop muted>
            <source src={Fundo} type='video/mp4'/>
           </video>   
        </div>

          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='maquinas' element={<Maquina/>}/>
            <Route path='integracao' element={<Integracao/>}/>
            <Route path='infraestrutura' element={<Infraestrutura/>}/>
            <Route path='logs' element={<Logs/>}/>
            <Route path='suporte' element={<Suporte/>}/>
          </Routes>        

    </section>

    {/* Init Footer */}
    {/* End Footer */}
    </>
  )
}
