const inicialState={
    pokemons:[],
    unPokemon:[],
    tipos:[],
    pokeNoModificable: []
}

function reducer(state=inicialState, {type, payload}){
    switch(type){
        case "GET_POKEMONS":
            return{
                ...state,
                pokemons: payload,
                pokeNoModificable: payload

            }
        case "SELECT_POKEMON":
            return{
                ...state,
                unPokemon: payload,
            }
        case "DESMONTAR_POKEMON":
            return{
                ...state,
                unPokemon:{}
            }
        case "GET_TIPOS":
            return{
                ...state,
                tipos: payload
            }
        case "FILTRO_TIPOS":
            const listaPokemon=[...state.pokeNoModificable]
            let listaTipos;
            if(payload === "todos"){
                listaTipos = listaPokemon;
            }else{
                listaTipos = listaPokemon.filter((ele)=> ele.types?.map(ele=> ele.name).includes(payload))

                console.log("ACA TRAIGO TIPOS ", listaTipos)
            }
            return{
                ...state,
                pokemons: listaTipos
            }
        case "ORDEN_ALFABETICO" :
            const listaDePokemon=[...state.pokemons]
            if(payload === "aZ"){
                listaDePokemon.sort((obj1, obj2)=>{
                    if(obj1.name < obj2.name){
                        return -1
                    }else{
                        return 1
                    }
                })
            }
            if(payload === "zA"){
                listaDePokemon.sort((obj1, obj2)=>{
                    if(obj1.name < obj2.name){
                        return 1
                    }else{
                        return -1
                    }
                })
            }
            return{
                ...state,
                pokemons: listaDePokemon
            }
        case "FILTRO_ORIGEN":
            let losPoke=[...state.pokeNoModificable];
            let filtrados;
            if(payload === "todos"){
                filtrados=losPoke
            }else{
                filtrados= payload === "guardadosEnLaDb"? losPoke.filter(poke=>(poke.id).toString().length > 10): losPoke.filter(poke=>(poke.id).toString().length < 10)
            }
            return{
                ...state,
                pokemons: filtrados
            }
        case "ORDEN_POR_ATAQUE":
            let listaDeAtaque =[...state.pokemons];
            if(payload === "minMax"){
                listaDeAtaque.sort((obj1, obj2)=>{
                    if(Number(obj1.Ataque)< Number(obj2.Ataque)){
                        return -1
                    }else{
                        return 1
                    }
                })
            }
            if(payload === "maxMin"){
                listaDeAtaque.sort((obj1, obj2)=>{
                    if(Number(obj1.Ataque) < Number(obj2.Ataque)){
                        return 1
                    }else{
                        return -1
                    }
                })
            }
            return{
                ...state,
                pokemons: listaDeAtaque
            }
        case "BUSQUEDA_POR_NOMBRE":
            let busquedaPokemon=[...state.pokeNoModificable]
            let resultado= busquedaPokemon.filter(ele=>(ele.name.toLowerCase()).includes(payload.toString().toLowerCase()))
            if(resultado){
                return{
                    ...state,
                    pokemons: resultado
                }
            }else{
                return{
                    ...state
                }
            }
            default: return state
    }
   
}
export default reducer