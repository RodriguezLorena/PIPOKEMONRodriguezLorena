import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { detalleDePokemon, desmontarPokemon } from '../redux/actions'

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
    <div>ESTO ES DETALLE
      <Link to="/home">Volver al Home</Link>
      <div>
        <h4>{unPokemon.name}</h4>
        <p>{unPokemon.vida}</p>
        <p>{unPokemon.Altura}</p>
        <p>{unPokemon.Defensa}</p>
        <p>{unPokemon.Velocidad}</p>
        <p>{unPokemon.Peso}</p>
        <img src={unPokemon.img} alt={unPokemon.name}/>

      </div>
    </div>
  )
}

export default Detalle