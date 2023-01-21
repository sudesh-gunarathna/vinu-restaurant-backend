import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react'

function FormInput({lable, type='text', onChange, value, onKeyDown, placeholder}) {
   
  return (
    <FormControl>
  <FormLabel>{lable}</FormLabel>
  <Input type={type} onChange={onChange} width= '100% ' value={value} onKeyDown={onKeyDown} placeholder={placeholder} />
  
</FormControl>
  )
}

export default FormInput
