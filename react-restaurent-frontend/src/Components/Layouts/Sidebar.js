import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    const items =[
        {
            id:1, name: 'Home', path:'/'
        },
        {
            id:2, name: 'Menu Items', path:'/admin/items'
        },
        {
            id:3, name: 'Orders', path:'/admin/orders'
        }
    ]
  return (
    <div className='sidebar'>
      {items.map((item)=>{
        return(
            <Link to={item.path} key={item.id} className='sidebar-items'> {item.name}</Link>
        )
         
      })}
    </div>
  )
}

export default Sidebar
