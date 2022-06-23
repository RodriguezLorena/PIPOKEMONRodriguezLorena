import './App.css';
import { Routes, Route } from "react-router-dom"
import Landing from './Paginas/Landing';
import Home from './Paginas/Home';
import Detalle from './Paginas/Detalle';
import CreandoPoke from './Paginas/CreandoPoke';
import Error404 from './Paginas/Error404';


function App() {
  console.log(Landing)
  return (
  
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/detalle/:id' element={<Detalle/>}/>
      <Route path='/create' element={<CreandoPoke/>}/>
      <Route path='*' element={<Error404/>}/>
    </Routes>
 
  );
}

export default App;
