import { Button } from '@chakra-ui/react'
import React from 'react'

function SubmitButton({text,colorScheme='blue', className='', onClick ,variant}) {
  return <Button colorScheme={colorScheme} className={className} onClick={onClick} variant={variant}>{text}</Button>
}

export default SubmitButton
