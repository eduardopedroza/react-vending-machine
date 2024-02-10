import React from 'react';
import { Link } from 'react-router-dom';

function KitKat() {
  return (
    <div>
      <img 
        src='https://dulceriasvazquez.com/cdn/shop/products/kitkat3.png?v=1662671674&width=1445'
        style={{ width: '100px', height: '100px' }}
      />
      <p>So yummy!</p>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default KitKat;