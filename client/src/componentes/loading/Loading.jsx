import React from 'react'
import style from "./loading.module.css";
import { Link, useLocation } from 'react-router-dom';


const Loading = () => {
  let locacion= useLocation()
  if(locacion.pathname === "/home"){
    return (
    
      <div className={style.loader} role='progressbar' aria-label='loading pokethings'>
        <div className={style.pokeballContainer}>
          <div className={style.pokeball}></div>
        
        </div>
      <div>
      <h1 className={style.titulo}>Estamos Cargando los datos</h1>
        <p className={style.span}>No te vayas de esta Pagina, lo bueno siempre tarda en llegar 😅​😉​</p>
      </div>
      </div>
    );
  }else{
    return (
    
      <div className={style.loader} role='progressbar' aria-label='loading pokethings'>
        <div className={style.pokeballContainer}>
          <div className={style.pokeball}></div>
        
        </div>
      <div>
      <h1 className={style.titulo}>upp, parece que no existe lo que busca</h1>
       <Link to= "/home">Volver al home</Link>
      </div>
      </div>
    );
  }
 
};
export default Loading