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
            if(payload === "all"){
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
            default: return state
    }
   
}
export default reducer