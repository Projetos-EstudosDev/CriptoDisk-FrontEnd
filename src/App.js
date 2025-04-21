import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Cadastros from './Pages/Cadastro';
import TelaChat from './Pages/TelaChat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Cadastro" element={<Cadastros/>} />
          <Route path='/Chat' element={<TelaChat/>}/>
      </Routes>
    </BrowserRouter>     
  );
}

export default App;
