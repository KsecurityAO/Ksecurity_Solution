import React from 'react'
import styles from './Ameacas.module.css'
import { VictoryPie, VictoryChart, VictoryBar, VictoryLabel,  VictoryAxis} from 'victory';
import { PiDetective } from "react-icons/pi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { VscError } from "react-icons/vsc";

const Amecas =()=>{

  
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

  //Ameacas Top
  const topAmeacas=[
    {
      x:'DoS',
      y:120
    },
    {
      x:'Brute Force',
      y:300
    },
    {
      x:'DDoS',
      y:105
    },
    {
      x:'C2',
      y:190
    },
    {
      x:'Scanner',
      y:180
    },
    {
      x:'MIT',
      y:390
    },
    {
      x:'RCE',
      y:300
    },
    {
      x:'Phishing',
      y:250
    },
    {
      x:'Ransomware',
      y:400
    }
  ]
  return(
    <>
    {/* -------------wrapper----------------- */}
       <section className={`${styles.container} md:grid md:grid-cols-3 md:grid-rows-2 gap-3 flex justify-center  flex-wrap flex-col p-3`}>
        
        {/* Ameacas Resolvidas e nao resolvidas */}
            <div className={`${styles.ameacasFound} text-whiteText bg-Bgreen-transparent rounded-md flex flex-wrap justify-around items-center p-1 gap-3 `}>

              <div className='flex flex-col justify-center items-center p-2'>
                <span className={styles.spanIcon}>
                <PiDetective/>
                </span>
              <h2 className={styles.ameacasText}>Ameacas</h2>
              <span className={styles.totalSmall}>1390</span>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <span className={styles.spanIcon}>
              <PiDetective/>
                </span>
              <h2 className={styles.ameacasText}>Econtradas</h2>
              <span className={styles.totalSmall}>23990</span>
              </div>
             
            </div>

  {/* Grafico das ameacas Top 10 */}
            <div className={` ${styles.wrapperAmecasTop} col-span-2 row-span-2  text-whiteText bg-Bgreen-transparent md:ml-8 rounded-md flex flex-col flex-wrap`}>
              <h2 className={`${styles.totalSmall} text-center pt-2`}>Top 10 Ameacas</h2>

              <div className={`${styles.ameacasTop} flex flex-wrap justify-center items-center`}>
               <VictoryChart 
               domainPadding={{ x:9, y:-15}} 
               >
                 <VictoryAxis
                        style={{
                          tickLabels: { fill: '#99A19A', fontSize:'12' }, // Cor das labels do eixo Y (do lado esquerdo)
                          axis: { stroke: '#99A19A' }, // Cor da linha do eixo  
                        }}
                        labels={({ datum }) => datum.y}
                       
                      />
                      <VictoryAxis
                        dependentAxis
                        style={{
                          tickLabels: { fill: '#99A19A', fontSize:'12'}, // Cor das labels do eixo X (embaixo, se houver)
                          axis: { stroke: '#99A19A',
                            width:'1'
                           },
                        }}
                      />
                <VictoryBar horizontal 
                cornerRadius={{top:'4'}}
                labels={({ datum }) => datum.y}
                style={{ 
              labels: { 
                fill: "#fcf6f6", 
                fontSize:12
              },
              data:{
                fill:'#057412'
              }
            }}
                  labelComponent={<VictoryLabel dx={-80}/>}
                  data={topAmeacas}
                  barRatio={1}
             
                  />
               </VictoryChart>   
               </div>
            </div>

{/* Graficos Incidentes Web */}
            <div className='  text-whiteText bg-Bgreen-transparent rounded-md'>
              <h2 className={`${styles.totalSmall} text-center pt-2`}>Incidentes na Web</h2>

              <div className={` flex justify-around h-24`}>
            
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

              <div className='flex flex-wrap justify-around'>
                <span className={styles.iconAmeacas3}>Resolvidos </span>
                <span className={styles.iconAmeacas4}>Nao Resolvidos </span>
              </div>
            </div>
        </section>
    </>
  )

}

export default Amecas;