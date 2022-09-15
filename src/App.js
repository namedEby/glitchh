import React from 'react'
import Login from './components/login/login'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userslice';
import Logout from './components/logout/logout';

const App = () => {
  const user=useSelector(selectUser);
  console.log(user)
  return (
    
    <div>
      {user?<Logout/>:<Login/>}
    </div>
  )
}

export default App
