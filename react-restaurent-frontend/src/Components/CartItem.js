import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { api } from '../config'
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons'

function CartItem({item,handleAdd,handleMinus, handleRemove}) {
   
  return (
    <div className='cart-item-container'>
      <img alt='' src={`${api}${item.image}`} />
      <div className='crat-item-deatails'>
        <h3 className='crat-item-title'>{item.name}</h3>
        <h5 className='crat-item-price'>Rs. {item.price} x {item.qty}</h5>
        <div className='add-delete-btns'>
         <IconButton size='sm' colorScheme='blue' icon={<AddIcon w={3} h={3} />} onClick={handleAdd} /> 
         <IconButton size='sm' colorScheme='yellow' icon={<MinusIcon w={3} h={3} />}  onClick={handleMinus}/> 
      </div>
      </div>
     
      
      <IconButton size='sm' colorScheme='red' icon={<DeleteIcon  />} onClick={handleRemove} /> 
    </div>
  )
}

export default CartItem
