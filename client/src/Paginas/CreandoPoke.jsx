import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { traerLosTipos, crearPokemon } from '../redux/actions'

const CreandoPoke = () => {
  const dispatch= useDispatch()

  const tipos= useSelector((state)=> state.tipos)

  useEffect(()=>{
    dispatch(traerLosTipos())
    dispatch(crearPokemon())
  }, [dispatch])

  const [nuevoPokemon, setNuevoPokemon]= useState({
    name:"",
    vida: 0,
    Ataque:0,
    Altura: 0,
    Defensa:0,
    Velocidad:0, 
    Peso: 0,
    img: "",
    type: []

  })

  const handlerInput=(e)=>{
    setNuevoPokemon({
      ...nuevoPokemon,
      [e.target.name]: e.target.value
    })
    setValidacion(validaciones({
      ...nuevoPokemon,
      [e.target.name]: e.target.value
    }))

  }

  const handlerSeleccionarTipo=(e)=>{
      setNuevoPokemon({
        ...nuevoPokemon,
        type:[
          ...nuevoPokemon.type,
          e.target.value
        ]
        
      })
    }
  console.log("ACA ESTA TYPES ", nuevoPokemon.type)
  
  
  
  const handlerCraerPokemon=(e)=>{
    e.preventDefault()
    const pokemonCreado={
      ...nuevoPokemon 
    }
    dispatch(crearPokemon(pokemonCreado))
    alert("Tu Nuevo pokemon fue crado exitosamente")
   
  }
  //VALIDACIONES
  const [validacion, setValidacion]=useState({})

  function validaciones(nuevoPokemon){
    let validar = {}
    let nombre=/[1-9]/; 

    if(nuevoPokemon.name.length < 2 ) validar.name = "Necesita tener un minimo de 2 caracteres";
    if(nuevoPokemon.name.length > 15) validar.name = "Tiene que tener un minimo de 15 caracteres";
    if(nombre.test(nuevoPokemon.name)) validar.name= "No puede contener Numeros";
   
    if(Number(nuevoPokemon.vida) < 20 ) validar.vida = "tiene que ser una vida mayor a 20"
    if(Number(nuevoPokemon.vida) > 100 ) validar.vida = "tiene que ser una vida menor a 100"

    if(Number(nuevoPokemon.Altura) < 20 ) validar.Altura = "tiene que ser una Altura mayor a 20"
    if(Number(nuevoPokemon.Altura) > 100 ) validar.Altura = "tiene que ser una Altura menor a 100"

    if(Number(nuevoPokemon.Ataque) < 20 ) validar.Ataque = "tiene que ser un Ataque mayor a 20"
    if(Number(nuevoPokemon.Ataque) > 100 ) validar.Ataque = "tiene que ser un Ataque menor a 100"

    if(Number(nuevoPokemon.Defensa) < 20 ) validar.Defensa = "tiene que ser una Defensa mayor a 20"
    if(Number(nuevoPokemon.Defensa) > 100 ) validar.Defensa = "tiene que ser una defensa menor a 100"

    if(Number(nuevoPokemon.Velocidad) < 20 ) validar.Velocidad = "tiene que ser una Velocidad mayor a 20"
    if(Number(nuevoPokemon.Velocidad) > 100 ) validar.Velocidad = "tiene que ser una Velocidad menor a 100"

    if(Number(nuevoPokemon.Peso) < 20 ) validar.Peso = "tiene que ser un peso mayor a 20"
    if(Number(nuevoPokemon.Peso) > 100 ) validar.Peso = "tiene que ser un peso menor a 100"

    if(!nuevoPokemon.img.includes("https://")) validar.img ="Debe comenzar con https://"
    return validar
  }

  return (
    <div>ESTO ES EL FORMULARIO
      <div>
        <form>
          <label>
            Nombre 
            <input id="nombreInput" type="text" name="name" value={nuevoPokemon.name} 
            placeholder="Escribe el Nombre" onChange={(e)=>handlerInput(e)}/>
              {validacion.name && <p>{validacion.name}</p>}
          </label>
        </form>
      </div>

      <div>
        <label>
          Vida 
          <input type= "number" name="vida" value={nuevoPokemon.vida} onChange={(e)=>handlerInput(e)} placeholder='Coloque la vida'/>
            {validacion.vida && <p>{validacion.vida}</p>}
        </label>
      </div>

      <div>
        <label>
            Altura
            <input type= "number" name="Altura" value={nuevoPokemon.Altura} onChange={(e)=>handlerInput(e)} placeholder='Coloque Vida Minima'/>
              {validacion.Altura && <p>{validacion.Altura}</p>}
        </label>
      </div>

      <div>
        <label>
            Ataque
            <input type= "number" name="Ataque" value={nuevoPokemon.Ataque} onChange={(e)=>handlerInput(e)} placeholder='Coloque Ataque Minima'/>
            {validacion.Ataque && <p>{validacion.Ataque}</p>}
        </label>
      </div>

      <div>
        <label>
            Defensa 
            <input type= "number" name="Defensa" value={nuevoPokemon.Defensa} onChange={(e)=>handlerInput(e)} placeholder='Coloque Defensa Minima'/>
            {validacion.Defensa && <p>{validacion.Defensa}</p>}
        </label>
      </div>

      <div>
        <label>
            Velocidad 
            <input type= "number" name="Velocidad" value={nuevoPokemon.Velocidad} onChange={(e)=>handlerInput(e)} placeholder='Coloque Velocidad Minima'/>
              {validacion.Velocidad && <p>{validacion.Velocidad}</p>}
        </label>
      </div>

      <div>
        <label>
            Peso  
            <input type= "number" name="Peso" value={nuevoPokemon.Peso} onChange={(e)=>handlerInput(e)} placeholder='Coloque Peso Minimo'/>
              {validacion.Peso && <p>{validacion.Peso}</p>}
        </label>
      </div>

      <div>
        <label>
          Imagen
          <input type="text" name="img" value={nuevoPokemon.img} onChange={(e)=>handlerInput(e)} placeholder='Coloque su imagen aquí'/>
          {validacion.img && <p>{validacion.img}</p>}
        </label>
      </div>

      <div>
          <select defaultValue={"default"} onChange={(e)=>handlerSeleccionarTipo(e)}>
            <option value="default">Elegir Tipo</option>
            {
              tipos && tipos.map((elemento)=>{
               return(<option key={elemento.name} value={elemento.name}>{elemento.name}</option>)
              })
            }
          </select>
          <ul>
            {
              nuevoPokemon.type.length > 0 && nuevoPokemon.type.map(ele=> <li key={ele}>{ele}</li>)
            }
          </ul>
      </div>

      <button onClick={(e)=>{handlerCraerPokemon(e)}}>Crear Otro Pokemon</button>
    
    </div>
  )
}

export default CreandoPoke