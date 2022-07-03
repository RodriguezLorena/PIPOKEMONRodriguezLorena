import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BarraDeNavegacion from '../../componentes/barraDeNavegacion/BarraDeNavegacion'
import { detalleDePokemon, desmontarPokemon } from '../../redux/actions'
import style from "./detalle.module.css"

const Detalle = () => {
  const {id}= useParams();
  console.log("esto es el id", id)
  const unPokemon= useSelector((state)=> state.unPokemon)
  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(detalleDePokemon(id))
    return ()=>{
      dispatch(desmontarPokemon())
    }
  }, [dispatch, id])

  return (
    <div>
      <BarraDeNavegacion/>
      <div  className={style.contenedor}>
        <div className={style.contenedorDetalle}>
        <h4> Nuemero: {unPokemon.id}</h4>
        <h4> Nombre: {unPokemon.name}</h4>
        <p> Vida: {unPokemon.vida}</p>
        <p>Altura: {unPokemon.Altura}</p>
        <p>Defensa: {unPokemon.Defensa}</p>
        <p>Velocidad: {unPokemon.Velocidad}</p>
        <p>Peso: {unPokemon.Peso}</p>
        <img src={unPokemon.img} alt={unPokemon.name} className={style.img}/>
        </div>
      </div>
    </div>
  )
}

export default Detalle