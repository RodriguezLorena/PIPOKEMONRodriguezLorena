const axios = require("axios")

const pokemonApiUrl=()=>{

    return axios("https://pokeapi.co/api/v2/pokemon")
    .then((res)=>res.data)
}

const pokemonApi= async ()=>{
 
    const pokeapi= await pokemonApiUrl()
    return axios(pokeapi.next)
    .then((res)=>res.data)
}

const todosLosPokemones= async()=>{
    let primerData= await pokemonApiUrl()
    let segundaData= await pokemonApi()
    let ambasData=[...primerData.results, ...segundaData.results]

       return ambasData;
}

module.exports={todosLosPokemones}