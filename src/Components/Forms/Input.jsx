import React from 'react'
import styles from './Input.module.css'

const Input = ({type, ...props}) => {
  return (
    <input type={type} {...props} 
    className={styles.input}
    />
    
  )
}

export default Input
