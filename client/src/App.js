
import { Routes, Route } from "react-router-dom"
import Landing from './Paginas/Landing/Landing';
import Home from './Paginas/Home/Home';
import Detalle from './Paginas/Detalle/Detalle';
import CreandoPoke from './Paginas/CreandoPokemon/CreandoPoke';
import Error404 from './Paginas/Error404/Error404';


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
