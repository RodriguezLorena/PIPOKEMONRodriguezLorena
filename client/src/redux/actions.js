import axios from "axios"

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
            return dispatch({
                type:"SELECT_POKEMON",
                payload: detalle.data
            })   

        }catch (error) {
            console.log("ERROR EN DETALLE DEL POKEMON", error)
        }   
    }     
}