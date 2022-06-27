import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { detalleDePokemon } from '../redux/actions'

const Detalle = () => {
  const {id}= useParams();
  const unPokemon= useSelector((state)=> state.unPokemon)
  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(detalleDePokemon(id))
    return
  }, [dispatch, id])
  return (
    <div>ESTO ES DETALLE


    </div>
  )
}

export default Detalle