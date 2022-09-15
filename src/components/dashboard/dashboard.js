import React from 'react'
import Ad from '../ad/ad'
import Navbar from '../navbar/navbar'
import Post from '../post/post'
import './dashboard.css'

function Dashboard() {
  return (
    <div className='dashboardbg'>
        <div className='scrollable'>
        
        </div>
        <Navbar/>
        <div className='addash'><Ad/></div>
        
         
        
      
    </div>
  )
}

export default Dashboard
