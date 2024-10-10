import React from 'react'
import styles from './TableInfra.module.css'

const TabelInfra = () => {
  return (
    <>
      <section className={styles.tableInfo}>
      <table className={` ${styles.table}table-fixed bg-Bgreen-transparent md:rounded-md border-separate md:w-full`}>

      <thead className={styles.cabecalho}>
        <tr className={styles.cabecalho}>
          <th className={`${styles.cabecalho}`}>Tudo</th>
          <th className={`${styles.cabecalho}`}>Conformidade</th>
          <th className={`${styles.cabecalho}`}>Ameaca Externa</th>
          <th className={`${styles.cabecalho}`}>Ameaca Interna</th>
          <th className={`${styles.cabecalho}`}>Anomalia Significante</th>
        </tr>
      </thead>

      <tbody className={`${styles.colorBodyTable} md:p-4 text-center text-gray-300`}>
        <tr>
          <td>12 Dispositivos Cliente</td>
          <td >----</td>
          <td >----</td>
          <td >----</td>
          <td >----</td>
        </tr>
        <tr>
          <td >----</td>
          <td >-----</td>
          <td >3 Servidores</td>
          <td >----</td>
          <td >3 Seervidores</td>
        </tr>
        <tr>
          <td >------</td>
          <td >------</td>
          <td >809</td>
          <td >------</td>
          <td >------</td>
        </tr>
        <tr>
          <td >-----</td>
          <td >-----</td>
          <td >-----</td>
          <td >-----</td>
          <td >-----</td>
        </tr>
        <tr>
          <td >------</td>
          <td >#####</td>
          <td >#####</td>
          <td >#####</td>
          <td >------</td>
        </tr>
        <tr>
          <td >######</td>
          <td >13383838382</td>
          <td >809</td>
          <td >123456789009</td>
          <td >33333</td>
        </tr>
      </tbody>
      
      </table>

      </section>
    </>
  )
}

export default TabelInfra
