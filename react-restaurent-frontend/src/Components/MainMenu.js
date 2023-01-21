import React, { useEffect, useState } from 'react'
import './MainMenu.css'
import axios from 'axios'
import { api } from "../config";
import MenuItem from './MenuItem';
import toast  from 'react-hot-toast';


function MainMenu({cartItems, SetCartItems}) {
    const [items, setItems] = useState([]);

    useEffect(()=>{

        const FecthItems = async()=>{
           //const result = await axios.get( api +"/item/all");
           const result = await axios.get(`${api}/item/all`);
           //console.log(result);
           setItems(result.data);
        };
           FecthItems();
    }, []);
const handleClick =(clickedItem)=>{
    //console.log(clickedItem);

        const itemFound = cartItems.find ((item)=>{
          if (item.id===clickedItem.id){
            return true
          }
          else{
            return false
          }
        })
        if (itemFound)
        {
          toast.error("Item allready Added")
          return;
        }


    const newCartItems =[...cartItems];
    const newItem = {
        ...clickedItem,
        qty: 1
    }
    newCartItems.push(newItem);
    SetCartItems(newCartItems);
}

  return (
 
    <div className={cartItems.length >0 ? 'main-menu-container' : 'main-menu-container-when-open'}>
      {items.map((item)=>{
        return(
          <MenuItem key={item.id} item={item} onClick={()=>{handleClick(item)}}/>
           
       ) 

      })}
    </div>
  )
}

export default MainMenu
