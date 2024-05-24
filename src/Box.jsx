import  { useState } from 'react'


const Box = ({value,handleValue}) => {
    
  return (
    <button className='box'  onClick={handleValue}> 
   {value}
    </button>
  )
}

export default Box
