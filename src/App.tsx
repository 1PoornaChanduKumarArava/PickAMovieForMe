import { Outlet, useNavigate } from 'react-router'
import './App.css'
import { useEffect } from 'react'

function App() {
  
  const navigate=useNavigate();

  useEffect(()=>{
      if (!localStorage.getItem('token')){
        navigate('/loginpage')
      }
  },[])

  return (
    <>
      
      <Outlet/> 
      
    </>
  )
}

export default App
