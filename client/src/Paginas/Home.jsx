import React from 'react'
import { Link } from 'react-router-dom'
import Cards from '../componentes/Cards'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector} from "react-redux"
import { traerLosPokemones } from '../redux/actions'




const Home = () => {
  const dispatch= useDispatch()
  const pokemones= useSelector((state)=> state.pokemons);
  console.log(pokemones)

  useEffect(()=>{
    dispatch(traerLosPokemones())
  }, [dispatch])



  //inicio del paginado
  const [currentPage, setCurrentPage]= useState(1)

  const cantidadPorPagina= 12;
  const indiceUno= currentPage * cantidadPorPagina;
  const ultimoIndice= indiceUno - cantidadPorPagina;

  const listaDePokemon= pokemones.slice(ultimoIndice, indiceUno)
  
  const cambiarDepagina= ()=>{
    if(currentPage >= Math.ceil(pokemones.length/cantidadPorPagina)) return;
    setCurrentPage(currentPage +1)
  }
  const volverAlaAnterior=()=>{
    if(currentPage === 1) return;
    setCurrentPage(currentPage-1)
  }
  const paginas= (numPag)=>{
    setCurrentPage(numPag)
  }

  let numeroDePaginas =[];
  for( let i = 1; i <= Math.ceil(pokemones.length/cantidadPorPagina); i++){
    numeroDePaginas.push(i)
  }
  return (
    <div>
      <Link to="/">Volver al Inicio</Link>
      <div>
        <button onClick={volverAlaAnterior}>Volver a la pagina anterior</button>
        {
            numeroDePaginas && numeroDePaginas.map((num)=>{
              return(num !== currentPage)?
              (<button key={num} onClick={()=>paginas(num)}>{num}</button>)
              : (<button key={num} onClick={()=>paginas(num)}>{num}</button>)
            })
        }
        <button onClick={cambiarDepagina}>ir a la siguiente</button>
      </div>
      <div>
      <Cards listaDePokemon={listaDePokemon}/>
      </div> 
    </div>
  )
}

export default Home