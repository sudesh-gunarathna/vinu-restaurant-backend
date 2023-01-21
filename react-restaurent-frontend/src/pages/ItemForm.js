import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import FormInput from '../common/FormInput'
import SubmitButton from '../common/SubmitButton'
import { api } from '../config'
import './ItemForm.css'

function ItemForm() {
    const [name, setName] =useState ("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate();
    const params= useParams();
   // console.log(params);
   useEffect(()=>{
    const fetchItem = async()=>{
      const result = await axios.get(`${api}/item/${params.id}`)
      const item = result.data;
     // console.log(item);

      setName(item.name);
      setPrice(item.price);
      setImage(item.image);
    }
    if (params.id){

        fetchItem();
    }
  
   },[params.id])

    const handleUpload = async (e)=>{
    //console.log(e.target.files[0])
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image",file);
    const result = await axios.post(`${api}/upload`, formData);
   // console.log(result);
   setImage(result.data.path);
   
    }
    const handleSubmit = async()=>{
      try{
        if (params.id){
          await axios.put(`${api}/item/edit/${params.id}`,{name, price, image} );
          toast.success("Item Updated Successfully");
          navigate("/admin/items");
        }
        else{
          await axios.post(`${api}/item/add`,{name, price, image} );
          toast.success("Item Added Successfully");
          navigate("/admin/items");
        }
         
      }
      catch(err){
         console.log(err)
        toast.error("Something went wrong");
      }

     

    }
   

  return (
    <div className='item-form-container'>
      <h2 className='subtitle'>{(params.id)? "Edit": "Add"} Item</h2>
      <form >
        <div><FormInput lable='Name' value={name} 
        onChange={(e)=>setName(e.target.value)} placeholder='Type your name here'/>
        </div>
        
         <div> <FormInput lable='Price' type='number'value={price} 
        onChange={(e)=>setPrice(e.target.value)} placeholder='Rs: 0000.00'/></div>
          
          <div><FormInput lable='Image' type='file'onChange={handleUpload}  />
        {image && (<img src={`${api}${image}`}  alt="" />)}</div>
           <SubmitButton text={(params.id)? "Update":"Add Item"} className='submit-button' onClick={handleSubmit}  />
        
           
      </form>
    </div>
  )
}

export default ItemForm
