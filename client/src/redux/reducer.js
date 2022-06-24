const inicialState={
    pokemons:[]
}

function reducer(state=inicialState, {type, payload}){
    switch(type){
        case "GET_POKEMONS":
            return{
                ...state,
                pokemons: payload,

            }
            default: return state
    }
   
}
export default reducer