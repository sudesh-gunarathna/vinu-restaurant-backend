import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'
import Logo from './Logo'
import { Button } from '@chakra-ui/react'
import MainMenu from '../Components/MainMenu'
import Cart from '../Components/Cart'
import { useGlobal } from '../GlobalContext'
import { api } from '../config'
import axios from 'axios'

function Home() {
  const[cartItems, SetCartItems] =useState([])
  const {user, setUser} = useGlobal();
  const navigate = useNavigate();


  
  const  handleLogout = async ()=>{
    try{
      
      await axios.post(`${api}/auth/logout`,{}, {withCredentials: true})

      setUser(null)
      navigate('/');
      
     
    }
    catch(err){
      console.log(err)
    }
   
   }

  return (  
  <div className='home-container'>
      <div className='home-nav' >
        <Logo />

        <div>
          {(user!==null) ? (<>
            <Link to="/admin">
            <Button colorScheme='blue' >Go to Dashboad</Button>

            </Link>
             <Button colorScheme="red" variant="outline" onClick={handleLogout}> logout</Button>
          </>
          ):
          ( 
            <>
          <Link to="/Login">
          <Button colorScheme='blue' variant='outline'>Login</Button>
          </Link>
          <Link to="/Register">
          <Button colorScheme='yellow'variant='outline'>Register</Button>
          </Link>
          </>
          )}
          
        </div>
        
      </div>
       {/*<div className='home-inner-container'>*/}
       
       <div className={cartItems.length>0 ?'home-inner-container':'home-inner-container-mainMenus'}>
       {cartItems.length>0 ?<><MainMenu cartItems={cartItems} SetCartItems={SetCartItems} />
           <Cart cartItems={cartItems} SetCartItems={SetCartItems}/></>:<MainMenu cartItems={cartItems} SetCartItems={SetCartItems} />}
          
           
           </div>
          
    </div>
  )
}

export default Home
