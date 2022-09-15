import React from 'react'
import Register from '../Register/register';
import './landingpg.css';
import logo1 from'./../images/logo1.png';
import logo2 from './../images/logo2.png'
import Login from '../login/login';

function Landingpg() {
  return (
    <div className='landing_page_bg'>
        <div className='overlay'>
            <div className='logo'>
                <img src={logo1}/>
                
            </div>
            <span className='logo2'><img src={logo2}/></span>
            <div className='landing_page_text'>
               <span className='first_text'>Join the</span><br/><span className='main_text'>best gaming social media </span><br/><span className='scnd_text'>platform in the world</span>
                </div>
            <Login/>
        </div>
    </div>
  )
}

export default Landingpg
