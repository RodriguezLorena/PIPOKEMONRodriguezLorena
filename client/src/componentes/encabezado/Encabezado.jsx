import { useEffect } from 'react'
import { useState } from 'react'
import {React} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionTipos, actionOrdenAlabetico, traerLosTipos, actionCreadosExistentes, actionOrdenarPorAtaque, actionBusquedaPorNombre } from '../../redux/actions'
import style from "./encabezado.module.css"


const Encabezado = ({setCurrentPage}) => {
    const dispatch =useDispatch()
    const tipos= useSelector(state=> state.tipos)

    useEffect(()=>{
        dispatch(traerLosTipos())
    }, [dispatch])

//ARRANCO CON LAS FUNCIONES QUE  MANIPULAN MIS EVENTOS 
//ORDEN POR TIPO
    const handlerCambiarTipos=(e)=>{
        let valor = e.target.value;
        dispatch(actionTipos(valor))  
        setCurrentPage(1) 
    }
//ORDEN ALFABETICO
    const handlerCambiarOrdenAlfa=(e)=>{
        let valor = e.target.value;
        dispatch(actionOrdenAlabetico(valor))    
    }

//CREADOS U OPTENIDOS DE LA API
    const handlerCreadosOexistentes=(e)=>{
        let valor = e.target.value;
        dispatch(actionCreadosExistentes(valor))
        setCurrentPage(1)
    }

//ORDENAR POR ATAQUE
    const handlerCambiarOrdenPorAtaque=(e)=>{
       let valor = e.target.value;
       dispatch(actionOrdenarPorAtaque(valor)) 
    }

//BUSCADOR POR NOMBRE
    const[busquedaNombre, setBusquedaNombre]= useState("")

    function handlerPorNombre(e){
        let busqueda= e.target.value.toLowerCase().trim()
        setBusquedaNombre(busqueda)
    }

    function onSubmitPorNombre(e){
        e.preventDefault();
        dispatch(actionBusquedaPorNombre(busquedaNombre))
        setBusquedaNombre("");
        setCurrentPage(1)
    }





    return (
    <div className={style.contenedor}>
        <select className={style.filtro} onChange={(e)=>handlerCambiarTipos(e)} name="Tipos">
            <option value="todos">Todos los tipos</option>
            {
                tipos && tipos.map((ele)=>{
                    return(
                        <option key={ele.id} value={ele.name}>{ele.name}</option>
                    )
                })
            }
        </select>

        <select className={style.filtro} onChange={(e)=>handlerCambiarOrdenAlfa(e)} name='OrdenAlfabetico'>
            <option value="aZ">orden de la "A" a la "Z"</option>
            <option value="zA">orden de la "Z" a la "A"</option>
        </select>

        <select className={style.filtro} onChange={(e)=>handlerCreadosOexistentes(e)} name= "Origen">
            <option value="todos">Filtro de Origen</option>
            <option value="guardadosEnLaDb">Pokemones Creados</option>
            <option value="optenidosDeLaApi">Pokemones de la Api</option>
        </select>

        <select className={style.filtro} onChange={(e)=>handlerCambiarOrdenPorAtaque(e)} name= "Orden por ataque">
            <option value="minMax">Ataque Minimo</option>
            <option value="maxMin">Ataque Maximo</option>
        </select>

        <form onSubmit={(e)=>onSubmitPorNombre(e)}>
            <input className={style.buscador} type="text" value={busquedaNombre} onChange={(e)=>handlerPorNombre(e)} placeholder="Busca por mi nombre"/>
            <input className={style.buscador} type="submit" value="Buscar"/>
        </form>
    </div>
  )
}

export default Encabezado