import React from 'react';
import { Link } from 'react-router-dom';

function Takis() {
  return (
    <div>
      <img 
        src='https://supermode.com.mx/cdn/shop/products/100010413_7f73a827-0232-490b-b635-c35cd7c58679.jpg?v=1698804520'
        style={{ width: '100px', height: '100px'}}
      />
      <p>So yummy!</p>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Takis;