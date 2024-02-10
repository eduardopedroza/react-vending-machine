import React from 'react';
import { Link } from 'react-router-dom';

function Cheetos() {
  return (
    <div>
      <img 
        src='https://deliciasimportadas.com/wp-content/uploads/2021/06/Cheetos-Flamin-Hot-Crunchy.jpg'
        style={{ width: '100px', height: '100px' }}
      />
      <p>So yummy!</p>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Cheetos;

