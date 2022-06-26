import React from 'react'
import { Link } from 'react-router-dom'
import Cards from '../componentes/Cards'
import { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux"
import { traerLosPokemones } from '../redux/actions'
import style from "./style/home.module.css"


const Home = () => {
  const dispatch= useDispatch()
  const pokemones= useSelector((state)=> state.pokemons);
  console.log(pokemones)

  useEffect(()=>{
    dispatch(traerLosPokemones())
  }, [dispatch])
  
  return (
    <div>ESTO ES HOME
      <Link to="/">Volver al Inicio</Link>
      <div className={style.contenedor}>
      <Cards pokemones={pokemones}/>
      </div> 
    </div>
  )
}

export default Home