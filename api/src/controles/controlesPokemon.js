const axios = require("axios")
const {Pokemon, Type}= require("../db")

const pokeApi=  async()=>{
    let resultadosDeLaApi=[];
    const pedido= await axios("https://pokeapi.co/api/v2/pokemon")
    resultadosDeLaApi= pedido.data.results;
    pedidoDos= await axios(pedido.data.next)
    resultadosDeLaApi= [...resultadosDeLaApi, ...pedidoDos.data.results]
    return resultadosDeLaApi
}

const todosLosPokemonApi= async()=>{
    try {
        const arrayPoke= await pokeApi()
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
                    type:ele.data.types.map(elemento=>elemento.type.name.toString()),
                    img: ele.data.sprites.other.home.front_default
                    
                }
               
            })
           
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

module.exports={pokeApi, todosLosPokemonApi, infoDbTodosLosPokes,ambosDatos}