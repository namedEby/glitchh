import React ,{ useState } from 'react';
import './register.css';
import ImgButton from '../imgbutton/imagebtn';
import i from './../images/i.png';






const Register=()=> {
    const  [uname,setName] = useState("");
    const [upassword,setPassword]=useState("");
    const[email,setEmail] =useState("");
    const [confirmpass,setConfirmpass] =useState("");
    const [dob,setDob]=useState("");
    const [referal,setReferal] =useState("");
    const [passwordType, setPasswordType] = useState("password");
    const [confirmpasswordType, setconfirmPasswordType] = useState("password");
    
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }else{
        setPasswordType("password")
        return;
      }
      
    }
    const toggleCPassword =()=>{
      if(confirmpasswordType==="password")
      {
       setconfirmPasswordType("text")
       return;
      }else{
        setconfirmPasswordType("password")
        return;
      }
      
    }
  return (
    <div className='card'>
        <div className='register'>
            <form className='register_form' >
            <h1>Register</h1>
            <h6>Complete the form to create an account.<br/>Already have an account? <span className='bold_text'>Login</span></h6>
            <input type="Name" //name input
                placeholder='Username' 
                value={uname} 
                onChange={(e)=>setName(e.target.value)}
            />
            <input type="email"  //password input
              placeholder='Email'
              value={email} 
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label className='buttonInside'>
            <input type="password"  //password input
              placeholder='Password'
              value={upassword} 
              
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button id="showPassword" onClick={togglePassword}>{ passwordType==="password"? <img className='i' src={i}/>:<i className="bi bi-eye">not hide</i> }</button>
            </label>
            
            
            <label className='buttonInside'>
            <input type="password" //name input
                placeholder='Confirm Password' 
                value={confirmpass} 
                
                onChange={(e)=>setConfirmpass(e.target.value)}
            />
            <button id="cPass" onClick={toggleCPassword}>{ passwordType==="password"? <img src={i}/> :<i className="bi bi-eye">not hide</i> }</button>
            </label>
            
            <input 
                type="date" //name input
                placeholder='Date of Birth' 
                value={dob} 
                onChange={(e)=>setDob(e.target.value)}
                style={{color:'#D3D3D3'}}
            />
            <input type="text" //name input
                placeholder='Referal' 
                value={referal} 
                onChange={(e)=>setReferal(e.target.value)}
            />
            <div className='chkboxes'>
            <div className='terms_and_conditions'>
              <label>
                <input className='chkbox-terms' type="checkbox" />
                <label className='focus_text '>Accept <span className=''>Terms and Conditions</span> </label>
                
              </label>

              {/* <button class="link">forgot password</button> */}
            </div>
            <div className='subscribe_news'>
              <label>
                <input className='chkbox-news' type="checkbox" />
                <label className='focus_text'>Subscribe to news updates </label>
                
              </label>

              {/* <button class="link">forgot password</button> */}
            </div>
            </div>
           

            <button type='submit' className='submit_btn'>Submit</button>
            
            <div className='divider'
                style={{display: 'flex', flexDirection: 'row', alignItems: 'center',color:"#FFFFFF"}}
            >
            <div style={{flex: 1, height: '1px', backgroundColor:"#FFFFFF"}} />

             <div>
                 <p style={{width: '70px', textAlign: 'center',fontWeight:'bold'}}>OR</p>
            </div>

            <div style={{flex:1, height: '1px', backgroundColor: '#FFFFFF'}} />
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

export default Register;