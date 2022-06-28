const inicialState={
    pokemons:[],
    unPokemon:[],
    tipos:[]
}

function reducer(state=inicialState, {type, payload}){
    switch(type){
        case "GET_POKEMONS":
            return{
                ...state,
                pokemons: payload,

            }
        case "SELECT_POKEMON":
            return{
                ...state,
                unPokemon: payload,
            }
        case "GET_TIPOS":
            return{
                ...state,
                tipos: payload
            }
            default: return state
    }
   
}
export default reducer