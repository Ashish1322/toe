import React from 'react'
import '../board.css'
export default function Square({value,onclick}) {
  
  return (
    <button onClick={onclick}  className='square'>{value}</button>
  )
}
