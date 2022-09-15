import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userslice';
import"./login.css"

import ImgButton from '../imgbutton/imagebtn';

const Login=()=> {
    const  [uname,setName] = useState("");
    const [upassword,setPassword]=useState("");
    
    //redux reducer calls
    // const dispatch = useDispatch();
    // const handleSubmit=(e)=>{
    //   e.preventDefault();
    //    dispatch(login({
    //     name:uname,
    //     password:upassword,
    //     loggedIn:true,
    //   }))


    // onSubmit={(e)=>handleSubmit(e)}}

    

    //Login Form
  return (
    <div className='card'>
        <div className='login'>
        <form className='login_form' >
          
            <h1>Login</h1>
            <h6>Welcome back to Glitch.Good to see you back.<br/>Dont have an account yet ? <span className='focus_text'>Register</span></h6>
            <input type="Name" //name input
                placeholder='name' 
                value={uname} 
                onChange={(e)=>setName(e.target.value)}
            />
            
           <input type="password"  //password input
              placeholder='password'
              value={upassword} 
              id="pinput"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <i class="bi bi-eye-slash" id="togglePassword"></i>
            <div className='chkforgot'>
              <label>
                <input className='chkbox' type="checkbox" />
                <label className='signedintxt'>keep me signed in </label>
                
              </label>

              {/* <button class="link">forgot password</button> */}
            </div>
            
            
            <button type='submit' className='submit_btn'>Submit</button>

            <div
              className='line'
            >
            <div style={{flex: 1, height: '1px', backgroundColor:"#FFFFFF" ,}} />

             <div>
                 <p style={{width: '70px', textAlign: 'center',fontWeight:'bold'}}>OR</p>
            </div>

            <div style={{flex: 1, height: '1px', backgroundColor: '#FFFFFF'}} />
            </div>

            <div className='loginsrc'>
              <ImgButton imgurl="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
              <ImgButton imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png"/>
              <ImgButton imgurl="https://www.freeiconspng.com/uploads/steam-logo-icon-7.png"/>
            </div>

  
        </form>

     </div>
  
    </div>
      
  
  )
}

export default Login;