import React from 'react'
import styles from './Contacte.module.css'

const Contacte = () => {
  return (
    <div>
       <form className={`${styles.form} flex flex-col flex-wrap gap-2 items-center justify-center p-2`}>

                   <input type="name" placeholder='Seu Nome'  />
                   <input type="email" placeholder='Seu Email'  />
                   <textarea rows='4'  placeholder='A mensagem' ></textarea>

                <div className=' w-full flex justify-end'>
                   <button className='btn-'>Enviar</button>
                </div>
                  
        </form>

    </div>
  )
}

export default Contacte
