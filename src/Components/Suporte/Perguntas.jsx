import React from 'react'
import styles from './Perguntas.module.css' 
import { FiArrowUpRight } from "react-icons/fi";

const Perguntas = () => {

        
  return (
    <div className={`flex flex-col flex-wrap justify-center`}>

       {/* 
       <h3 className='text-5xl'>E a sua tranquilidade <span className={styles.hashTag}>Offline</span></h3> */}

       <h3 className={`${styles.Ptitle} text-base text-whiteText pt-2`}>Oferecemos suporte técnico especializado em:</h3>
       
       <p className={` ${styles.Ptext}  text-darkGreen text-justify`}>
        Monitoramento de incidentes: Supervisão contínua e detecção de ameaças em tempo real.
        Análise de vulnerabilidades: Identificação e correção de falhas antes que sejam exploradas.
        Suporte personalizado: Orientação passo a passo para otimizar sua segurança digital.
        Respostas rápidas a incidentes: Ação imediata para minimizar impactos e restaurar a normalidade.
        Monitoramento de incidentes: Supervisão contínua e detecção de ameaças em tempo real.
        Análise de vulnerabilidades: Identificação e correção de falhas antes que sejam exploradas.
        Suporte personalizado: Orientação passo a passo para otimizar sua segurança digital.
        Respostas rápidas a incidentes: Ação imediata para minimizar impactos e restaurar a normalidade.
        Suporte personalizado: Orientação passo a passo para otimizar sua segurança digital.
        Respostas rápidas a incidentes: Ação imediata para minimizar impactos e restaurar a normalidade.

        Caso precise de ajuda, entre em contato com nosso suporte técnico. Estamos prontos para proteger o que é mais importante para o seu negócio!
       </p>
      
    <form>
      <button className='text-sm flex flex-wrap justify-center items-center gap-1'>
       <span>Termos de uso</span> 
       <span><FiArrowUpRight/></span>
      </button>
    </form>
  
    </div>
  )
}

export default Perguntas
