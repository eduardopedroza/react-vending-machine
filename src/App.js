import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

import VendingMachine from './VendingMachine';
import Cheetos from './Cheetos';
import Takis from './Takis';
import KitKat from './KitKat';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<VendingMachine/>}/>
          <Route path='/cheetos' element={<Cheetos/>}/>
          <Route path='/takis' element={<Takis/>}/>
          <Route path='/kitkat' element={<KitKat/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
