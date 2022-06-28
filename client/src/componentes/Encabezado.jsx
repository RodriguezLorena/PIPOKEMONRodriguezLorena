import { useEffect } from 'react'
import {React} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionTipos, actionOrdenAlabetico, traerLosTipos } from '../redux/actions'

const Encabezado = ({setCurrentPage}) => {
    const dispatch =useDispatch()
    const tipos= useSelector(state=> state.tipos)

    useEffect(()=>{
        dispatch(traerLosTipos())
    }, [dispatch])

//ARRANCO CON LAS FUNCIONES QUE  MANIPULAN MIS EVENTOS 
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
    return (
    <div>
        <select onChange={(e)=>handlerCambiarTipos(e)} name="Tipos">
            <option value="all">Todos los tipos</option>
            {
                tipos && tipos.map((ele)=>{
                    return(
                        <option key={ele.id} value={ele.name}>{ele.name}</option>
                    )
                })
            }
        </select>

        <select onChange={(e)=>handlerCambiarOrdenAlfa(e)} name='OrdenAlfabetico'>
            <option value="todos">orden alfabetico</option>
            <option value="aZ">orden de la "A" a la "Z"</option>
            <option value="zA">orden de la "Z" a la "A"</option>
        </select>
    </div>
  )
}

export default Encabezado