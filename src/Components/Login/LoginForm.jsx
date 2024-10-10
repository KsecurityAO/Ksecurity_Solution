import React from 'react'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import styles from './LoginForm.module.css'
import Logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom' 

 function handleSubmit(event){
  event.preventDefault()
 }

const LoginForm = () => {
  return (
    <>
    <div className={styles.wrapper}>
        <div className={`${styles.login} animateForm`}>
          <img src={Logo} alt='Carregando Logo'/>
            <div className={styles.textLogin}>

                <Link to='/' >Entrar</Link>
                <Link to='criar' >Cadastrar</Link>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>

            <Input type='email' placeholder='Insira o Email'/>
            <Input type='password' placeholder='Sua senha'/>
            
            <div className={styles.button}>
            <Button type='submit'>Entrar</Button>
            </div>

            <Link className={styles.forgot} to='reset'>Esqueceu a senha?</Link>
            
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

export default LoginForm
