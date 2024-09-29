import React from 'react'
import styles from './LoginCriar.module.css'
import Logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom' 
import Button from '../Forms/Button'
import Input from '../Forms/Input'

const LoginCriar = () => {

  function handleSubmit(event){
  event.preventDefault()
  }
  return (
    <>
    <div className={styles.wrapper}>
        <div className={`${styles.login} animateForm`}>
          <img src={Logo} alt='Carregando Logo'/>
            <div className={styles.textLogin}>

                <Link to='/login' >Entrar</Link>
                <Link to='/criar' >Cadastrar</Link>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>

            <Input type='text' placeholder='Seu Nome'/>
            <Input type='email' placeholder='Insira o Email'/>
            <Input type='password' placeholder='Sua senha'/>
            
            <div className={styles.button}>
            <Button type='submit'>Concluir</Button>
            </div>

            <Link className={styles.forgot} to='/'>Ja tem uma conta?</Link>
            
            </form>
        </div>

        <div className={styles.forma1}>
        
        </div>
        
        <div className={styles.forma2}>
 
        </div>
 
        <div className={styles.forma3}>
 
        </div>
        <div className={styles.forma4}>
 
        </div>
    </div>
    </>
  )
}

export default LoginCriar
