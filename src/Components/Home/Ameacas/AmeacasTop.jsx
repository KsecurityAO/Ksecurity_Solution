import React from 'react'
import styles from './AmeacasTop.module.css'
import {VictoryPie} from 'victory'
import { FaRegCircleCheck } from "react-icons/fa6";
import { VscError } from "react-icons/vsc";

const AmeacasTop = () => {

  const dataPie=[
    {
          x:'Dennis',
          y:90
    },
    {
          x:'Camela',
          y:20
    }
  ]

    const tiposDeAmeacas=[
      {
        x:'DoS',
        y:50
      },
      {
        x:'Brute Force',
        y:30
      },
      {
        x:'DDoS',
        y:15
      },
      {
        x:'C2',
        y:20
      },
      {
        x:'Scanner',
        y:18
      },
      {
        x:'MIT',
        y:16
      },
      {
        x:'RCE',
        y:30
      },
      {
        x:'Phishing',
        y:25
      },
      {
        x:'Ransomware',
        y:40
      }
    ]

  return (
    <section className={`${styles.wrapper} grid grid-cols-3 grid-rows-1 gap-3`}>


    <div className=' text-whiteText bg-Bgreen-transparent rounded-md'>
      <h2 className={`${styles.totalSmall} text-center pt-1`}>Incidentes na Infraestrutura</h2>

      <div className={` flex flex-wrapper justify-around`} style={{ height: '6rem'}}>
            
            <div className={ styles.progressBar}>
            <VictoryPie data={dataPie}
             innerRadius={100}
            colorScale={['rgb(228, 168, 4)', 'transparent']}
            padding={16}
            width={250}
            height={250}
            cornerRadius={20}
            labels={()=>null}
             />

              <div className={`${styles.contagem} flex flex-col flex-wrap items-center justify-center text-center gap-1`}>
              <span className={styles.iconChecked}><FaRegCircleCheck/></span>
              <span>99</span>
             </div>

            </div>
            <div className={ styles.progressBar}>
            <VictoryPie data={dataPie}
              style={{labels:{fill:'#ffffff', fontSize:'14'},
              
            }}
             innerRadius={100}
            colorScale={['rgba(196, 196, 32, 0.911)', 'transparent']}
             padding={16}
             width={250}
             height={250}
             cornerRadius={20}
             labels={()=>null}
             />
             
             <div className={`${styles.contagem} flex flex-col flex-wrap items-center justify-center text-center gap-1`}>
              <span className={styles.iconError}><VscError/></span>
              <span>99</span>
             </div>
            </div>
            
            </div>

            <div className='flex flex-wrap justify-around'>
              <span className={styles.iconAmeacas1}>Resolvidos </span>
              <span className={styles.iconAmeacas2}>Nao Resolvidos </span>
            </div>
      
    </div>

        <div className=' text-whiteText bg-Bgreen-transparent rounded-md ml-8'>
        <h2 className='text-center pt-2'>Ameacas Detetadas</h2>

        <div className="flex flex-wrapper justify-between" style={{ height: '8rem'}}>
                
                <VictoryPie data={tiposDeAmeacas}
               innerRadius={80}
              colorScale={['rgb(75, 140, 238)', 'rgb(1, 158, 48)', 'rgb(230, 168, 0)', 'rgb(243, 15, 15)', 'rgb(188, 58, 228)']}
              padding={16}
              width={250}
              height={250}
              labels={()=>null}
               />

                  <div className={styles.tiposDeAmeacas}>
                    <span className={styles.span1}>DOS</span>
                    <span className={styles.span2}>Brute Force</span>
                    <span className={styles.span3}>DDOS</span>
                    <span className={styles.span4}>C2</span>
                    <span className={styles.span5}>Scanner</span>
                    <span className={styles.span6}>MIT</span>
                    <span className={styles.span7}>RCE</span>
                    <span className={styles.span8}>Phishing</span>
                    <span className={styles.span9}>Ransomware</span>
                  </div>
              </div>        
        </div>

        
        <div className=' text-whiteText bg-Bgreen-transparent rounded-md'>
        <h2 className='text-center pt-2'> Perfomance do Servidor </h2>

        <div className={` flex flex-wrapper justify-around`} style={{ height: '6rem'}}>
            
            <div className={ styles.progressBar}>
            <VictoryPie data={dataPie}
             innerRadius={100}
            colorScale={['rgb(75, 140, 238)', 'transparent']}
            padding={16}
            width={250}
            height={250}
            cornerRadius={20}
            labels={()=>null}
             />

              <div className={`${styles.contagem} flex flex-col flex-wrap items-center justify-center text-center gap-1`}>
              <span className={styles.iconChecked}><FaRegCircleCheck/></span>
              <span>99</span>
             </div>

            </div>
            <div className={ styles.progressBar}>
            <VictoryPie data={dataPie}
              style={{labels:{fill:'#ffffff', fontSize:'14'},
              
            }}
             innerRadius={100}
            colorScale={['rgb(188, 58, 228)', 'transparent']}
             padding={16}
             width={250}
             height={250}
             cornerRadius={20}
             labels={()=>null}
             />
             
             <div className={`${styles.contagem} flex flex-col flex-wrap items-center justify-center text-center gap-1`}>
              <span className={styles.iconError}><VscError/></span>
              <span>99</span>
             </div>
            </div>
            
            </div>
        </div>

</section>
  )
}
export default AmeacasTop
