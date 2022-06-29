import axios from "axios"
const esperarPro=(time)=> new Promise(    
    (resolve, reject)=>{
        setTimeout(()=>{
            console.log("se resolvio")
            resolve("se resolvio")
        }, time )
    }
) 


export function traerLosPokemones(){
    return (dispatch)=>{
        return axios("http://localhost:3001/pokemons")
        .then(res=> dispatch({
            type: "GET_POKEMONS",
            payload: res.data
        }))
        .catch(error=>console.log(error))
    }
}

export function detalleDePokemon(id){
    
    return async function(dispatch){
        try {
            let detalle = await axios(`http://localhost:3001/pokemons/${id}`)
            await esperarPro(0)
            return dispatch({
                type:"SELECT_POKEMON",
                payload: detalle.data
            })   

        }catch (error) {
            console.log("ERROR EN DETALLE DEL POKEMON", error)
        }   
    }     
}

export const desmontarPokemon=()=>{
        return({
            type: "DESMONTAR_POKEMON"
        })    
}

export function traerLosTipos(){
    return async function(dispatch){
        try {
            let dataTipos= await axios("http://localhost:3001/tipos")
            return dispatch({
                type: "GET_TIPOS",
                payload:dataTipos.data
            })
        } catch (error) {
            console.log("ERROR EN LA LLAMADA A LA RUTA TIPOS", error)
        }
    }
}

export function actionTipos(payload){
    return{
        type: "FILTRO_TIPOS",
        payload
    }
}

export function actionOrdenAlabetico(payload){
    return{
        type: "ORDEN_ALFABETICO",
        payload
    }
}

export function actionCreadosExistentes(payload){
    return async function(dispatch){
        try {
            return dispatch({
                type:"FILTRO_ORIGEN",
                payload
            })   
        } catch (error) {
            console.log("ERROR EN FILTROS DE ORIGEN (creados o existentes) ", error)
        }
    }
  
}