const inicialState = {
  pokemons: [],
  unPokemon: [],
  tipos: [],
  pokeNoModificable: [],
  pokemonCreado: "inicial",
};

function reducer(state = inicialState, { type, payload }) {
  switch (type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: payload,
        pokeNoModificable: payload,
      };
    case "SELECT_POKEMON":
      return {
        ...state,
        unPokemon: payload,
      };
    case "DESMONTAR_POKEMON":
      return {
        ...state,
        unPokemon: {},
      };
    case "GET_TIPOS":
      return {
        ...state,
        tipos: payload,
      };
    case "FILTRO_TIPOS":
      const listaPokemon = [...state.pokeNoModificable];
      let listaTipos;
      if (payload === "todos") {
        listaTipos = listaPokemon;
        return{
          ...state,
          pokemons: listaTipos
        }
      } else {
        listaTipos = listaPokemon.filter((ele) =>
          ele.types?.map((ele) => ele.name).includes(payload)
        );


        if (!listaTipos.length == 0) {
          let resultadoPrevio = listaTipos;
          console.log("aca esta resultado if", resultadoPrevio);
          return {
            ...state,
            pokemons: resultadoPrevio,
          };
        } else {
          let resultadoPrevio = listaPokemon;
          console.log("aca esta resultado else", resultadoPrevio);
          alert("No existe un pokemon asociado a este tipo");
          return {
            ...state,
            pokemons: resultadoPrevio,
          };
        } 
      }
    
    case "ORDEN_ALFABETICO":
      const listaDePokemon = [...state.pokemons];
      if (payload === "aZ") {
        listaDePokemon.sort((obj1, obj2) =>
          obj1.name.toLowerCase() < obj2.name.toLowerCase() ? -1 : 1
        );
      } //
      if (payload === "zA") {
        listaDePokemon.sort((obj1, obj2) => {
          if (obj1.name.toLowerCase() < obj2.name.toLowerCase()) {
            return 1;
          } else {
            return -1;
          }
        });
      }
      return {
        ...state,
        pokemons: listaDePokemon,
      };
    case "FILTRO_ORIGEN":
      let losPoke = [...state.pokeNoModificable];
      let filtrados;
      if (payload === "todos") {
        filtrados = losPoke;
      } else {
        filtrados =
          payload === "guardadosEnLaDb"
            ? losPoke.filter((poke) => poke.id.toString().length > 10)
            : losPoke.filter((poke) => poke.id.toString().length < 10);
      }
      return {
        ...state,
        pokemons: filtrados,
      };
    case "ORDEN_POR_ATAQUE":
      let listaDeAtaque = [...state.pokemons];
      if (payload === "minMax") {
        listaDeAtaque.sort((obj1, obj2) => {
          if (Number(obj1.Ataque) < Number(obj2.Ataque)) {
            return -1;
          } else {
            return 1;
          }
        });
      }
      if (payload === "maxMin") {
        listaDeAtaque.sort((obj1, obj2) => {
          if (Number(obj1.Ataque) < Number(obj2.Ataque)) {
            return 1;
          } else {
            return -1;
          }
        });
      }
      return {
        ...state,
        pokemons: listaDeAtaque,
      };
    case "BUSQUEDA_POR_NOMBRE":
      let busquedaPokemon = [...state.pokeNoModificable];
      let resultado = busquedaPokemon.filter((ele) =>
        ele.name.toLowerCase().includes(payload.toLowerCase())
      );

      if (!resultado.length == 0) {
        let resultadoPrevio = resultado;
        console.log("aca esta resultado if", resultadoPrevio);
        return {
          ...state,
          pokemons: resultadoPrevio,
        };
      } else {
        let resultadoPrevio = busquedaPokemon;
        console.log("aca esta resultado else", resultadoPrevio);
        alert("NO existe pokemon");
        return {
          ...state,
          pokemons: resultadoPrevio,
        };
      }

    case "POKEMON_CREADO":
      return {
        ...state,
        pokemonCreado: payload,
      };
    case "POKEMON_NO_CREADO":
      return {
        ...state,
        pokemonCreado: payload,
      };
    default:
      return state;
  }
}
export default reducer;
