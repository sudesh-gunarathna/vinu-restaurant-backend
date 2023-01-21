import { Avatar, Button } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../../config';
import { useGlobal } from '../../GlobalContext'


function AdminNavbar() {

    const {user, setUser} = useGlobal();
    const navigate = useNavigate();

   const  handleLogout = async ()=>{
    await axios.post(`${api}/auth/logout`,{}, {withCredentials: true})

    setUser(null)
    navigate('/');
   }
  return (
    <div className='admin-navbar'>
        <h2>Admin Dashboard</h2>
        <div className='admin-navbar-button'>
            {user && <div className='admin-navbar-avatar'>
                <Avatar size='sm' name={user.email}/>
                {user.email}
            </div> }

            <Button colorScheme="red" variant="outline" onClick={handleLogout}> logout</Button>
        </div>
    </div>
  )
}

export default AdminNavbar
