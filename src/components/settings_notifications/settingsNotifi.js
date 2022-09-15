import React from 'react'
import Navbar from '../navbar/navbar'
import PushNotifi from './pushNotifications'

import Settings from './settings'
import './settingsNotifi.css'


export default function SettingsNotifications() {
  return (
    <div className='main_page'>
       <PushNotifi/>
      <Navbar/>
      <Settings/>
      
    </div>
  )
}
