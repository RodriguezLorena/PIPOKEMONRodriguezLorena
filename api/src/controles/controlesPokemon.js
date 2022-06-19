const axios = require("axios")
const {Pokemon, Type}= require("../db")

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


const todosLosPokemonApi= async()=>{
    try {
        const arrayPoke= await todosLosPokemones()
        const arrayPromesas= arrayPoke.map((ele)=>{
            return axios(ele.url)
        })
        
        const infoArrayPoke= await Promise.all(arrayPromesas)
       
        .then((res)=>{
             const arrayPokemon= res.map((ele)=>{
                return{
                    id: ele.data.id,
                    name: ele.data.name,
                    vida: ele.data.stats[0].base_stat,
                    Ataque: ele.data.stats[1].base_stat,
                    Defensa: ele.data.stats[2].base_stat,
                    Velocidad: ele.data.stats[5].base_stat,
                    Altura: ele.data.height / 10,
                    Peso: ele.data.weight / 10 ,
                    type:ele.data.types.map(elemento=>elemento.type.name),
                    img: ele.data.sprites.other.home.front_default
                }
               
            })
            console.log(arrayPokemon)
            return arrayPokemon
           
            
        })
        return infoArrayPoke
    } catch (error) {
        console.log(error)
    }
}


//informacion de la base de datos
const infoDbTodosLosPokes= async()=>{
try {
    const pokemon= await Pokemon.findAll({
        include:{
            model:Type,
            attributes: ["name"],
            through:{ attributes: []}
        }
    })
    return pokemon

} catch (error) {
    console.log(error)
}
}

const ambosDatos= async()=>{
    try {
        const datosDeLaApi= await todosLosPokemonApi()
        const datosDeLaDb= await infoDbTodosLosPokes()
        const ambos= [...datosDeLaApi, ...datosDeLaDb]
        return ambos
    } catch (error) {
        console.log(error)
    }
}

module.exports={todosLosPokemones, todosLosPokemonApi, infoDbTodosLosPokes,ambosDatos}