// 4. router 적용
//npm install axios

import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Detail } from './pages/Detail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export function App(){
 return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/detail" element={<Detail/>}/>
  </Routes>
  </BrowserRouter>
 );
}

