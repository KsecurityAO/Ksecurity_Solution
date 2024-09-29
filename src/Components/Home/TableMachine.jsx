import React from 'react'
import styles from './TableMachine.module.css'
import { FaLinux } from "react-icons/fa";
import { AiOutlineWindows } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import {Link} from 'react-router-dom'

const TableMachine = () => {
  return (
      <table className={`${styles.table} table-auto bg-Bgreen-transparent w-full rounded-md border-separate`}>
      <caption class="caption-top">

        <div className={`${styles.hedaTable} flex flex-wrap justify-between`}>
            <span>Dispositivo Conectado</span>
            
            <Link to='#' className={` flex flex-wrap items-center justify-center`}> 
            <span>Ver Mais</span> 
            <span><IoIosArrowDown/></span>
            </Link>
            
        </div>

  </caption>
      <thead>
        <tr>
          <th className={styles.cabecalho}>Nivel</th>
          <th className={styles.cabecalho}>IP DE ORIGEM</th>
          <th className={styles.cabecalho}>PORTA DE ORIGEM</th>
          <th className={styles.cabecalho}>IP DE DESTINO</th>
          <th className={styles.cabecalho}>PORTA DE DESTINO</th>
          <th className={styles.cabecalho}>SISTEMA</th>
          <th className={styles.cabecalho}>DATA</th>
        </tr>
      </thead>

      <tbody className={`${styles.colorBodyTable} p-4`}>
        <tr className=''>
          <td><Link className='text-green-600'>Alto</Link></td>
          <td >13383838382</td>
          <td >809</td>
          <td >123456789009</td>
          <td >9876</td>
          <td className={styles.iconSystem}><FaLinux/></td>
          <td >2020-10-02</td>
        </tr>
        <tr>
          <td ><Link className='text-yellow-600'>Normal</Link></td>
          <td >13383838382</td>
          <td >809</td>
          <td >123456789009</td>
          <td >9876</td>
          <td ><FaLinux/></td>
          <td >2020-10-02</td>
        </tr>
        <tr>
          <td ><Link className='text-yellow-600'>Normal</Link></td>
          <td >13383838382</td>
          <td >809</td>
          <td >123456789009</td>
          <td >9876</td>
          <td ><AiOutlineWindows/></td>
          <td >2020-10-02</td>
        </tr>
        <tr>
          <td ><Link className='text-red-600'>Grave</Link></td>
          <td >13383838382</td>
          <td >809</td>
          <td >123456789009</td>
          <td >9876</td>
          <td ><AiOutlineWindows/></td>
          <td >2020-10-02</td>
        </tr>
        <tr>
          <td ><Link className='text-red-600'>Grave</Link></td>
          <td >13383838382</td>
          <td >809</td>
          <td >123456789009</td>
          <td >9876</td>
          <td ><AiOutlineWindows/></td>
          <td >2020-10-02</td>
        </tr>
        <tr>
          <td ><Link className='text-red-600'>Grave</Link></td>
          <td >13383838382</td>
          <td >809</td>
          <td >123456789009</td>
          <td >9876</td>
          <td ><AiOutlineWindows/></td>
          <td >2020-10-02</td>
        </tr>
        <tr>
          <td ><Link className='text-red-600'>Grave</Link></td>
          <td >13383838382</td>
          <td >809</td>
          <td >123456789009</td>
          <td >9876</td>
          <td ><AiOutlineWindows/></td>
          <td >2020-10-02</td>
        </tr>
        <tr>
          <td ><Link className='text-red-600'>Grave</Link></td>
          <td >13383838382</td>
          <td >809</td>
          <td >123456789009</td>
          <td >9876</td>
          <td ><AiOutlineWindows/></td>
          <td >2020-10-02</td>
        </tr>
      </tbody>
      </table>
  )
}

export default TableMachine
