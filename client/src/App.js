import './App.css';
import { Routes, Route } from "react-router-dom"
import Landing from './Paginas/Landing';
import Home from './Paginas/Home';
import Detalle from './Paginas/Detalle';
import CreandoPoke from './Paginas/CreandoPoke';
import Error404 from './Paginas/Error404';


function App() {
  return (
   
    <Routes>
      <Route exact path='/' element={<Landing/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/detalle/:id' element={<Detalle/>}/>
      <Route exact path='/create' element={<CreandoPoke/>}/>
      <Route exact path='*' element={<Error404/>}/>
    </Routes>
  
  
   
    
 
  );
}

export default App;
