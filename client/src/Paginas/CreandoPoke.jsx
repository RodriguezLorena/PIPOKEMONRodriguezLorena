import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { traerLosTipos } from '../redux/actions'

const CreandoPoke = () => {
  const dispatch= useDispatch()

  const tipos= useSelector((state)=> state.tipos)

  useEffect(()=>{
    dispatch(traerLosTipos())
  }, [dispatch])

  const [nuevoPokemon, setNuevoPokemon]= useState({
    name:"",
    vidaMin: 0,
    vidaMax: 0,
    AlturaMin: 0,
    AlturaMax:0,
    DefesaMin:0,
    DefensaMax:0,
    VelocidadMin:0,
    VelocidadMax:0,
    PesoMin: 0,
    PesoMax:0,
    img: "",
    types: []

  })
  return (
    <div>ESTO ES EL FORMULARIO
      <div>
        <form>
          <label>
            Nombre 
            <input id="nombreInput" type="text" name="nombre" value="" placeholder="Escribe el Nombre"/>
          </label>
        </form>
      </div>

      <div>
        <label>
          Vida 
          <input type= "number" name="AlturaMin" value="" placeholder='Coloque Altura Minima'/>
          <input type= "number" name="AlturaMax" value="" placeholder='Coloque Altura Maxima'/>
        </label>
      </div>

      <div>
        <label>
            Altura
            <input type= "number" name="vidaMin" value="" placeholder='Coloque Vida Minima'/>
            <input type= "number" name="vidaMax" value="" placeholder='Coloque Vida Maxima'/>
        </label>
      </div>

      <div>
        <label>
            Defensa 
            <input type= "number" name="DefesaMin" value="" placeholder='Coloque Defensa Minima'/>
            <input type= "number" name="DefesaMax" value="" placeholder='Coloque Defensa Maxima'/>
        </label>
      </div>

      <div>
        <label>
            Velocidad 
            <input type= "number" name="VelocidadMin" value="" placeholder='Coloque Velocidad Minima'/>
            <input type= "number" name="VelocidadMax" value="" placeholder='Coloque Velocidad Maxima'/>
        </label>
      </div>

      <div>
        <label>
            Peso  
            <input type= "number" name="PesoMin" value="" placeholder='Coloque Peso Minimo'/>
            <input type= "number" name="PesoMax" value="" placeholder='Coloque Peso Maximo'/>
        </label>
      </div>

      <div>
        <label>
          Imagen
          <input type="text" name="img" value="" placeholder='Coloque su imagen aquí'/>
        </label>
      </div>

      <div>
          <select defaultValue={"default"}>
            <option value="default">Elegir Tipo</option>
            {
              tipos && tipos.map((elemento)=>{
               return(<option key={elemento.name} value={elemento.name}>{elemento.name}</option>)
              })
            }
          </select>
      </div>
    
    </div>
  )
}

export default CreandoPoke