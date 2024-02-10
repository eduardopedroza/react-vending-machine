import React from 'react';
import { Link } from 'react-router-dom';

function VendingMachine() {
  return (
    <div className='VendingMachine'>
      <div className='Greeting'>
        <p>Hello, What would you like to eat?</p>
      </div>
      <div className='Selector'>
        <p><Link to='/cheetos'>Cheetos</Link></p>
        <p><Link to='/takis'>Takis</Link></p>
        <p><Link to='/kitkat'>KitKat</Link></p>
      </div>
    </div>
  )
}

export default VendingMachine;