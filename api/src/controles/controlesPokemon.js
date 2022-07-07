const axios = require("axios")
const data = require("./data")
const {Pokemon, Type}= require("../db")
let cachePokemonesDeApi= []


const pokeApi=  async()=>{
    let resultadosDeLaApi=[];
    const pedido= await axios("https://pokeapi.co/api/v2/pokemon")
    resultadosDeLaApi= pedido.data.results;
    pedidoDos= await axios(pedido.data.next)
    resultadosDeLaApi= [...resultadosDeLaApi, ...pedidoDos.data.results]
    return resultadosDeLaApi
}

const todosLosPokemonApi= async()=>{
	console.log("ACA ESTA TODOS LOS POKEMONES ", cachePokemonesDeApi.length)

    try {
		if(cachePokemonesDeApi.length){
			return cachePokemonesDeApi
		}else{
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
						types:ele.data.types.map(elemento=>{ return {name: elemento.type.name}}),
						img: ele.data.sprites.other.home.front_default
						
					}
				   
				})   
				return arrayPokemon      
			})
			
			cachePokemonesDeApi = infoArrayPoke
			
			return infoArrayPoke
		}
       


        //ESTO ES PROVISORIO PARA PREUBAS DEL FRONT
        // console.timeEnd("todosLosPokemonApi")
        // return data;
    } catch (error) {
        console.log("todosLosPokemonApi ", error)
      
        return cachePokemonesDeApi
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
    //aca tendria que hacer mi condicional... pero como???

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