const inicialState={
    pokemons:[],
    unPokemon: []
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
                unPokemon: payload
            }
            default: return state
    }
   
}
export default reducer