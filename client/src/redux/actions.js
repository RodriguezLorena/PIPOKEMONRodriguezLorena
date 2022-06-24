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