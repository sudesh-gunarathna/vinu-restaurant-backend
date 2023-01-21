import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { api } from '../config';
import './Items.css'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    
  } from '@chakra-ui/react'
  import {AddIcon} from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

function Items() {
    const [items, setItems] = useState([]);

    useEffect(()=>{
         const fetchItems = async()=>{
         const result  = await axios.get(`${api}/item/all`)
         setItems(result.data)
         //console.log(result.data)
        }
        fetchItems();
    } ,[])
   // console.log(items)
  return (
    <div className='items-container'>
     <h2 className='subtitle'>Menu Items</h2> 
    <Link to='/admin/item-form'>
        <Button colorScheme='blue' variant='outline' leftIcon={<AddIcon width={4} height={4}/>}>Add Item</Button>
      </Link>    
    
     <TableContainer>
  <Table variant='simple'>
    
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th isNumeric>Price</Th>
        <Th>Image</Th>
        <Th>Action</Th>
        
      </Tr>
    </Thead>
    <Tbody>
        {items.map((item)=>( 
       <Tr key={item.id}>
        <Td>{item.name}</Td>
        <Td isNumeric>{item.price}</Td>
        <Td>
            <img src={`${api}${item.image}`} alt="" />
        </Td>
        <Td>
         <Link to={`/admin/item-form/${item.id}`}>
            <Button colorScheme='yellow' variant='outline' >Edit</Button>
            </Link>
        </Td>
      </Tr>))}
     
     
    </Tbody>
    
  </Table>
</TableContainer>
    </div>
  )
}

export default Items
