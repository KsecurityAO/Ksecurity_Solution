import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";
const Footer = () => {
  return (
    <footer className='bg-Bgreen-transparent rounded-md flex items-center justify-center gap-4 w-full'>
      <div><FaLinkedin/></div>
      <div><IoLogoFacebook/></div>
      <div><LuInstagram/></div>
      <div>X</div>
    </footer>
  )
}

export default Footer
