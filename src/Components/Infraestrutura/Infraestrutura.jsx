import React from 'react'
import styles from './Infraestrutura.module.css'
import TabelInfra from './TabelInfra'
import {VictoryPie} from 'victory'

const Infraestrutura =()=>{

    const dataPie=[
        {
              x:'Dennis',
              y:99
        },
        {
              x:'Camela',
              y:1
        }
      ]

    return (
        <>
        <section className='container flex flex-col flex-wrap justify-center gap-5 animeLeft'>
            <div className={`${styles.title}`}>
                <h3 className='pl-6 pt-4 '>Ameaca na Infraestrutura</h3>
            </div>

      <div className={`${styles.wrapperFather}wrapper md:grid md:grid-cols-3 md:grid-rows-2 gap-4 mx-4 flex flex-wrap md:justify-center`}>

          <div className=" bg-Bgreen-transparent row-span-2 rounded-md flex flex-col flex-wrap justify-center items-center gap-1 py-3 w-full">

          <span className={`${styles.title} text-center text-base`}>Dispositivo Ativo Elegivel</span>
          
          <div className={` ${styles.progressBar} flex flex-wrap h-19`}>  
            <VictoryPie data={dataPie} 
              innerRadius={100}
            colorScale={['rgba(197, 53, 53, 0.959)', 'transparent']}
            padding={16}
            width={240}
            height={240}
            cornerRadius={20}
            labels={()=>null}
              />
              <div className={`${styles.contagem} flex flex-wrap justify-center items-center flex-col`}>
              <span className={`${styles.spanPorcentagem}`}>99%</span>
              <span className={`${styles.spanPorcentagemBar}`}></span>
              <span className={`text-gray-400 text-center`}>De 20</span>
              </div> 
            </div>
                      <button className={`${styles.btnLegi} py-2 px-3 rounded-full transition `}>Ir para Elegibilidade</button>
          </div>

          <div className=" bg-Bgreen-transparent col-span-2 row-span-1 rounded-md flex flex-wrap flex-col justify-center gap-1">
                <span className='pl-4 text-base'>TAGS</span>

              <div className={`${styles.wrapperTags} flex flex-wrap items-center justify-center gap-4  w-full`}>
                  
                <div className="div1 flex flex-col flex-wrap justify-center items-center ">
                  <small  className={`text-gray-300`}>80%</small>
                  <span className='text-4xl text-orange-700'>90</span>
                  <small className={` text-gray-300`}>Tudo</small>
                </div>

                <div className="div1 flex flex-col flex-wrap justify-center items-center ">
                  <small className={` text-gray-300`}>0%</small>
                  <span className='text-4xl text-green-700'>0</span>
                  <small className={` text-gray-300`}>Conformidade</small>
                </div>

                <div className="div1 flex flex-col flex-wrap justify-center items-center ">
                  <small className={` text-gray-300`}>20%</small>
                  <span className='text-4xl text-blue-700'>3</span>
                  <small className={` text-gray-300`}>Ameaca Externa</small>
                </div>

                <div className="div1 flex flex-col flex-wrap justify-center items-center ">
                  <small className={`text-gray-300`}>20%</small>
                  <span className='text-4xl text-yellow-500'>3</span>
                  <small className={`text-gray-300`}>Ameaca Interna</small>
                </div>

                <div className="div1 flex flex-col flex-wrap justify-center items-center ">
                  <small className={`text-gray-300`}>20%</small>
                  <span className='text-4xl text-blue-500'>3</span>
                  <small className={`text-gray-300`}>Anomalia Significativa</small>
                </div>

                </div>
                
          </div>

          <div className={` ${styles.wrapperDispoCliente} bg-Bgreen-transparent col-span-2 row-span-1 rounded-md flex flex-wrap justify-around items-center w-full py-3 gap-4`}l>

              <div className={` dispoCliente flex flex-col flex-wrap justify-center items-center`}>
                  
                  <small className={` ${styles.span}  text-gray-300`}>Dispositivo Cliente</small>
                  <span className='text-4xl text-gray-50'> 12 </span>
                  <small className={` ${styles.span}  text-gray-300`}>Visivel Por todos</small>
              </div>

              <div className={`${styles.servidoresPutBar}`}>
                  
              </div>

              <div className={` flex flex-col flex-wrap justify-center items-center`}>
                  <small className={` ${styles.span} text-gray-300`}>Servidores</small>
                  <span className='text-4xl text-gray-50'>0</span>
                  <small className={` ${styles.span} text-gray-300`}>Visivel Por todos</small>
              </div>
          </div>
    </div>
        
        <div className={styles.table}>
              <TabelInfra/>
        </div>

        </section>
        </>
    )
}

export default Infraestrutura