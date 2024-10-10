import React from 'react'
import styles from './MaquinasEmQuarentena.module.css'
import {VictoryPie} from 'victory'

const MaquinasEmQuarentena = () => {
    const dataPie=[
        {
            x:'Dennis',
            y:96
        },
        {
            x:'Camel',
            y:1
        }
    ]
  return (
    <>
       <section className='bg-Bgreen-transparent rounded-md p-3'>

       <h3 className={styles.title}>Maquinas Em Quarentena</h3>
        
        <div className={`${styles.items}flex flex-wrap justify-center items-center flex-col gap-2`}>  
          {/* Primeiro Host */}
          <div className={`${styles.host} bg-Bgreen-transparent flex flex-wrap justify-around items-center gap-3 p-3 rounded-md  mb-2`}>
          <div className={` ${styles.progressBar} flex flex-wrap h-14`}>
          
            <VictoryPie data={dataPie}
            
             innerRadius={100}
            colorScale={['rgb(221, 86, 86)', 'transparent']}
            padding={16}
            width={250}
            height={250}
            cornerRadius={20}
            labels={()=>null}
             />

              <div className={`${styles.contagem}`}>
              <span>95%</span>
             </div>
            
            </div>

            <div className="prop flex flex-wrap flex-col text-sm text-darkGreen">
              <span>Host: Keidi Lopes</span>
              <span>SO: Windows</span>
              <span>Ip: 192.168.10.6</span>
            </div>

            <div className="btn">
              <button className={` ${styles.btnDetail} px-3 py-1 bg-letGreen rounded-md  hover:bg-letGreenHover transition`}>Detalhes</button>
            </div>

          </div>


          {/* Segundo Host */}
          <div className={`${styles.host} bg-Bgreen-transparent flex flex-wrap justify-around items-center gap-3 p-3 rounded-md mb-2`}>
          <div className={` ${styles.progressBar} flex flex-wrap h-14`}>
          
            <VictoryPie data={dataPie}
            
             innerRadius={100}
            colorScale={['rgb(221, 86, 86)', 'transparent']}
            padding={16}
            width={250}
            height={250}
            cornerRadius={20}
            labels={()=>null}
             />

              <div className={`${styles.contagem}`}>
              <span>95%</span>
             </div>
            
            </div>

            <div className="prop flex flex-wrap flex-col text-sm text-darkGreen">
              <span>Host: Mr. Camela </span>
              <span>SO: Windows</span>
              <span>Ip: 192.168.10.6</span>
            </div>

            <div className="btn">
              <button className={` ${styles.btnDetail} px-3 py-1 bg-letGreen rounded-md hover:bg-letGreenHover transition`}>Detalhes</button>
            </div>

          </div>

          {/* Terceiro Host */}
          <div className={`${styles.host} bg-Bgreen-transparent flex flex-wrap justify-around items-center gap-3 p-3 rounded-md mb-2`}>
         
          <div className={` ${styles.progressBar} flex flex-wrap h-14`}>
          
            <VictoryPie data={dataPie}
            
             innerRadius={100}
            colorScale={['rgb(221, 86, 86)', 'transparent']}
            padding={16}
            width={250}
            height={250}
            cornerRadius={20}
            labels={()=>null}
             />

              <div className={`${styles.contagem}`}>
              <span>95%</span>
             </div>
            
            </div>

            <div className="prop flex flex-wrap flex-col text-sm text-darkGreen">
              <span>Host: Antonio Bula </span>
              <span>SO: Linux</span>
              <span>Ip: 192.168.10.6</span>
            </div>

            <div className="btn">
              <button className={` ${styles.btnDetail} px-3 py-1 bg-letGreen rounded-md hover:bg-letGreenHover transition`}>Detalhes</button>
            </div>

          </div>

          {/* Quarto Host */}
          <div className={`${styles.host} bg-Bgreen-transparent flex flex-wrap justify-around items-center gap-3 p-3 rounded-md mb-2`}>
         
          <div className={` ${styles.progressBar} flex flex-wrap h-14`}>
          
            <VictoryPie data={dataPie}
            
             innerRadius={100}
            colorScale={['rgb(221, 86, 86)', 'transparent']}
            padding={16}
            width={250}
            height={250}
            cornerRadius={20}
            labels={()=>null}
             />

              <div className={`${styles.contagem}`}>
              <span>95%</span>
             </div>
            
            </div>

            <div className="prop flex flex-wrap flex-col text-sm text-darkGreen">
              <span>Host: Antonio Bula </span>
              <span>SO: Linux</span>
              <span>Ip: 192.168.10.6</span>
            </div>

            <div className="btn">
              <button className={` ${styles.btnDetail} px-3 py-1 bg-letGreen rounded-md hover:bg-letGreenHover transition`}>Detalhes</button>
            </div>

          </div>

          {/* Quarto Host */}
          <div className={`${styles.host} bg-Bgreen-transparent flex flex-wrap justify-around items-center gap-3 p-3 rounded-md mb-2`}>
         
          <div className={` ${styles.progressBar} flex flex-wrap h-14`}>
          
            <VictoryPie data={dataPie}
            
             innerRadius={100}
            colorScale={['rgb(221, 86, 86)', 'transparent']}
            padding={16}
            width={250}
            height={250}
            cornerRadius={20}
            labels={()=>null}
             />

              <div className={`${styles.contagem}`}>
              <span>95%</span>
             </div>
            
            </div>

            <div className="prop flex flex-wrap flex-col text-sm text-darkGreen">
              <span>Host: Antonio Bula </span>
              <span>SO: Linux</span>
              <span>Ip: 192.168.10.6</span>
            </div>

            <div className="btn">
              <button className={` ${styles.btnDetail} px-3 py-1 bg-letGreen rounded-md hover:bg-letGreenHover transition`}>Detalhes</button>
            </div>

          </div>
          
          {/* Quarto Host */}
          <div className={`${styles.host} bg-Bgreen-transparent flex flex-wrap justify-around items-center gap-3 p-3 rounded-md mb-2`}>
         
          <div className={` ${styles.progressBar} flex flex-wrap h-14`}>
          
            <VictoryPie data={dataPie}
            
             innerRadius={100}
            colorScale={['rgb(221, 86, 86)', 'transparent']}
            padding={16}
            width={250}
            height={250}
            cornerRadius={20}
            labels={()=>null}
             />

              <div className={`${styles.contagem}`}>
              <span>95%</span>
             </div>
            
            </div>

            <div className="prop flex flex-wrap flex-col text-sm text-darkGreen">
              <span>Host: Antonio Bula </span>
              <span>SO: Linux</span>
              <span>Ip: 192.168.10.6</span>
            </div>

            <div className="btn">
              <button className={` ${styles.btnDetail} px-3 py-1 bg-letGreen rounded-md hover:bg-letGreenHover transition`}>Detalhes</button>
            </div>

          </div>

        </div>
       </section>
    </>
  )
}

export default MaquinasEmQuarentena
