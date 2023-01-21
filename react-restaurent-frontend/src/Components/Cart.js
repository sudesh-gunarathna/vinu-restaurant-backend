import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import SubmitButton from '../common/SubmitButton';
import { api } from '../config';
import './Cart.css'
import CartItem from './CartItem'


function Cart({cartItems, SetCartItems}) {

    let total = 0;
    cartItems.forEach(element => {
       total += element.price * element.qty 
    });

    const handleAdd =(itemId)=>{
       // console.log('item.id', itemId)
       const newCartItems = cartItems.map ((item)=>{
           if (itemId===item.id)
               return{
                     ...item, 
                    qty: item.qty+1 
                     }
             return item;   
        })
        SetCartItems (newCartItems)
    }

    const handleMinus =(itemId)=>{
        // console.log('item.id', itemId)
        const newCartItems = cartItems.map ((item)=>{
            if (itemId===item.id && item.qty >1 )
                return{
                      ...item, 
                     qty: item.qty-1 
                      }
              return item;   
         })
         SetCartItems (newCartItems)
     }

     const handleRemove = (itemId)=>{
         const newCartItems = cartItems.filter ((item)=>{
            if (itemId=== item.id){
                return false;
            }
            else{return true;}
            
         })
         SetCartItems(newCartItems)
     } 
     const placeOrder = async()=>{
        try{
            await axios.post (`${api}/item/place-order`,  {items: cartItems});
            toast.success('Your Order placed Successfully');
             SetCartItems([]);
            }
        catch (err){
            console.log(err);
            toast.error('Something Went Wrong')
        }
      
       
     }

  return (
    <div className='cart-container box-shadow'>
      <h2>Your Order</h2>
      <div className='cart-item'></div>
    {cartItems.map((item)=>(
        <CartItem key={item.id} item={item}  
        handleAdd={()=>handleAdd(item.id)}
        handleMinus={()=>handleMinus(item.id)}
        handleRemove={()=>handleRemove(item.id)}/>)
    )}
{cartItems.length >0 && (<><div className='total'>Total : {total}</div> 

 <SubmitButton text='Place Order' className='place-order-button' onClick={placeOrder} /></>)}

    </div>
  
  )
}

export default Cart
