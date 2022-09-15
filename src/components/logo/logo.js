import React from 'react'
import './logo.css';
import logo1 from'./../images/logo1.png';
import logo2 from './../images/logo2.png'

export default function Logo() {
  return (
    <div>
        <div className='logo'>
                <img src={logo1}/>
                
            </div>
            <span className='logo2'><img src={logo2}/></span>
    </div>
    
    
  )
}
