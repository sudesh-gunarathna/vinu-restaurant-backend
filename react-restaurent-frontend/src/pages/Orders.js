import React, { useEffect, useState } from 'react'
import './Orders.css'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    Badge,
    
    
  } from '@chakra-ui/react'
import axios from 'axios';
import { api } from '../config';


function Orders() {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async()=> {
        const result = await axios.get(`${api}/item/orders`);
        setOrders(result.data);
       // console.log(result.data);
    }

    useEffect(()=>{
       // const fetchOrders = async()=> {
         //   const result = await axios.get(`${api}/item/orders`);
         //   setOrders(result.data);
           // console.log(result.data);
     //   }

      fetchOrders();
    },[]);
       // console.log(orders);
       const handleComplete = async(orderId)=>{
        await axios.post(`${api}/item/order-complete/${orderId}`,{});

       // const newOrders = orders.map((item)=>{
          //  return({...item})
                      
        //    })
         //   setOrders(newOrders);
           // console.log(newOrders);  
           // HAVE TO FETCH DATA????   
           fetchOrders();   
       }
     
  return (
    <div className='orders-container'>
      <h2>Orders</h2>
       <TableContainer>
        <Table variant='simple'>
            
            <Thead>
            <Tr>
                <Th>Order Code</Th>
                <Th>Items</Th>
                <Th isNumeric>Total</Th>
                <Th>Action</Th>
                
            </Tr>
            </Thead>
            <Tbody>
                {orders.map((order)=>( 
                     <Tr key={order.id}>
                     <Td>{order.code}</Td>
                     <Td>
                        {order.items.map((item)=>(
                            <div key={item.name}>
                                {item.name} - ({item.qty})

                            </div>
                        ))}
                     </Td>
                     <Td isNumeric>{order.total}
                     </Td>
                      <Td>
                        {(order.complete)?(<Badge  colorScheme='green'> Completed</Badge>):(
                            <Button colorScheme="green"  onClick={()=>handleComplete(order.id)}>Complete</Button>
                        )}
                     </Td>
                 </Tr>
           ))}
            
            
            </Tbody>
            
        </Table>
      </TableContainer> 
    </div>
  )
}

export default Orders
