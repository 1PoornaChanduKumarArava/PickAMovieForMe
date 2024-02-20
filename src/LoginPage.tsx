import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router';

const LoginPage = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();

  const handleAPI = () =>{
    console.log(email,password,"EMALPASSW")
    axios.post('https://reqres.in/api/login',{email:email,password:password}).then((response:any)=>{
      localStorage.setItem('token',response.data.token)
      navigate('/')
      console.log(response.data)
    }).catch(()=>{
      console.log('error in post');
    })
  }

  return (
    <>
      <div className="login-container w-85 bg-dark-trans white-border white-box-shadow">
          <h1 className='text-white fw-bolder text-shadow-white'>LOGIN</h1>
          <div className="login-form">
            <div className="form-group">
              <label className='text-white text-large text-left fw-800'>Email-Address :</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" placeholder='Email-Address' required/>
            </div>
            <div className="form-group">
              <label className='text-white text-large text-left fw-800'>Password :</label>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className='text-black' placeholder='Password' id="password" name="password" required/>
            </div>
            <button onClick={handleAPI} className="start-btn login-btn mt-2">Login</button>
          </div>
      </div>    
    </>
  )
}

export default LoginPage;
