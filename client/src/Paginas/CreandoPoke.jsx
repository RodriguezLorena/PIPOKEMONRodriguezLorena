import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { traerLosTipos, crearPokemon } from '../redux/actions'

const CreandoPoke = () => {
  const dispatch= useDispatch()
  const navegadorAutomatico= useNavigate()

  const tipos= useSelector((state)=> state.tipos)
  const creadoDefinitivo= useSelector(state=> state.pokemonCreado)

  useEffect(()=>{
    dispatch(traerLosTipos())
   
  }, [dispatch])

 useEffect(()=>{
    if(creadoDefinitivo === "creado"){
      alert("se creo exitosamente")
      setTimeout(()=>{
          navegadorAutomatico("/home")
        })
    }
    if(creadoDefinitivo === "noCreado"){
      alert("no se creo el pokemon")
    }
 }, [creadoDefinitivo])

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
    setValidacion(validaciones({
      ...nuevoPokemon,
      type:[
        ...nuevoPokemon.type,
        e.target.value
      ]  
    }))
  
   
    }
  console.log("ACA ESTA TYPES ", nuevoPokemon.type)
  
  const handlerEliminarTipo=(e)=>{
    const filtrados= nuevoPokemon.type.filter(ele=> ele !== e.target.innerHTML)
    setNuevoPokemon({
      ...nuevoPokemon,
      type:filtrados
    })
    setValidacion(validaciones({
      ...nuevoPokemon,
      [e.target.name]: e.target.value
    }))
  }
  
  
  const handlerCraerPokemon=(e)=>{
    e.preventDefault()
    console.log("ACA ESTA VALIDACION DE CREARPOKEMON ", validacion)
    if(Object.keys(validacion).length){
      alert("todos los campos son requeridos")
    }else{
      if(Object.keys(validaciones(nuevoPokemon)).length){
        alert("los campos nue pueden estar vacios")
      }else{
        dispatch(crearPokemon(nuevoPokemon))
      }
    }
   
  
   
  }
  //VALIDACIONES
  const [validacion, setValidacion]=useState({})

  function validaciones(nuevoPokemon){
    let validar = {}
    let verificarQueNoContNumero=/[1-9]/; 

    if(nuevoPokemon.name.length < 2 ) validar.name = "Necesita tener un minimo de 2 caracteres";
    if(nuevoPokemon.name.length > 15) validar.name = "Tiene que tener un minimo de 15 caracteres";
    if(verificarQueNoContNumero.test(nuevoPokemon.name)) validar.name= "No puede contener Numeros";
   
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
    
    if(!nuevoPokemon.type.length) validar.type= "Debe contener al menos un tipo"
    return validar
  }
  
  return (
    <div>ESTO ES EL FORMULARIO
      <form onSubmit={handlerCraerPokemon}>
      <div>
       
          <label>
            Nombre 
            <input id="nombreInput" type="text" name="name" value={nuevoPokemon.name} 
            placeholder="Escribe el Nombre" onChange={(e)=>handlerInput(e)}/>
          </label>
        
        {validacion.name && <p>{validacion.name}</p>}
      </div>

      <div>
        <label>
          Vida 
          <input type= "number" name="vida" value={nuevoPokemon.vida} onChange={(e)=>handlerInput(e)} placeholder='Coloque la vida'/>
        </label>
        {validacion.vida && <p>{validacion.vida}</p>}
      </div>

      <div>
        <label>
            Altura
            <input type= "number" name="Altura" value={nuevoPokemon.Altura} onChange={(e)=>handlerInput(e)} placeholder='Coloque Vida Minima'/>
        </label>
        {validacion.Altura && <p>{validacion.Altura}</p>}
      </div>
    
      <div>
        <label>
            Ataque
            <input type= "number" name="Ataque" value={nuevoPokemon.Ataque} onChange={(e)=>handlerInput(e)} placeholder='Coloque Ataque Minima'/>
        </label>
        {validacion.Ataque && <p>{validacion.Ataque}</p>}
      </div>
    
      <div>
        <label>
            Defensa 
            <input type= "number" name="Defensa" value={nuevoPokemon.Defensa} onChange={(e)=>handlerInput(e)} placeholder='Coloque Defensa Minima'/>
        </label>
        {validacion.Defensa && <p>{validacion.Defensa}</p>}
      </div>

      <div>
        <label>
            Velocidad 
            <input type= "number" name="Velocidad" value={nuevoPokemon.Velocidad} onChange={(e)=>handlerInput(e)} placeholder='Coloque Velocidad Minima'/>
        </label>
        {validacion.Velocidad && <p>{validacion.Velocidad}</p>}
      </div>

      <div>
        <label>
            Peso  
            <input type= "number" name="Peso" value={nuevoPokemon.Peso} onChange={(e)=>handlerInput(e)} placeholder='Coloque Peso Minimo'/>
        </label>
        {validacion.Peso && <p>{validacion.Peso}</p>}
      </div>

      <div>
        <label>
          Imagen
          <input type="text" name="img" value={nuevoPokemon.img} onChange={(e)=>handlerInput(e)} placeholder='Coloque su imagen aquí'/>
        </label>
        {validacion.img && <p>{validacion.img}</p>}
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
             nuevoPokemon.type.length > 0 ?nuevoPokemon.type.map(ele=> <li key={ele}  onClick={(e)=>handlerEliminarTipo(e)}>{ele}</li>)
             : (<p>{validacion.type}</p>)
            }
          </ul>
         
         
      </div>
      <div>
        <button onClick={(e)=>{handlerCraerPokemon(e)}}>Crear Otro Pokemon</button>
      </div>
     
      </form>
    </div>
  )
}

export default CreandoPoke