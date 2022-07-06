import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  traerLosTipos,
  crearPokemon,
  traerLosPokemones,
} from "../../redux/actions";
import style from "./creandoPoke.module.css";
import BarraDeNavegacion from "../../componentes/barraDeNavegacion/BarraDeNavegacion";

const CreandoPoke = () => {
  const dispatch = useDispatch();
  const navegadorAutomatico = useNavigate();

  const tipos = useSelector((state) => state.tipos);
  const [creadoDefinitivo, setCreadoDefinitivo] = useState("initial");
  const pokemones = useSelector((state) => state.pokemons);
  console.log("ACA ESTAN TODOS ", pokemones);

  useEffect(() => {
    dispatch(traerLosTipos());
    dispatch(traerLosPokemones());
  }, [dispatch]);

  useEffect(() => {
    if (creadoDefinitivo === "creado") {
      alert("se creo exitosamente");
      setTimeout(() => {
        navegadorAutomatico("/home");
      });
    }
    if (creadoDefinitivo === "noCreado") {
      alert("no se creo el pokemon");
    }
  }, [creadoDefinitivo, navegadorAutomatico]);

  const [nuevoPokemon, setNuevoPokemon] = useState({
    name: "",
    vida: 0,
    Ataque: 0,
    Altura: 0,
    Defensa: 0,
    Velocidad: 0,
    Peso: 0,
    img: "",
    type: [],
  });

  const handlerInput = (e) => {
    setNuevoPokemon({
      ...nuevoPokemon,
      [e.target.name]: e.target.value,
    });
    setValidacion(
      validaciones({
        ...nuevoPokemon,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handlerSeleccionarTipo = (e) => {
    setNuevoPokemon({
      ...nuevoPokemon,
      type: [...nuevoPokemon.type, e.target.value],
    });
    setValidacion(
      validaciones({
        ...nuevoPokemon,
        type: [...nuevoPokemon.type, e.target.value],
      })
    );
  };
  console.log("ACA ESTA TYPES ", nuevoPokemon.type);

  
  const handlerEliminarTipo = (e) => {
    const filtrados = nuevoPokemon.type.filter(  
      (ele) => ele !== e.target.innerHTML
    );
    console.log("ACA ESTA SETNUEVOPOKEMON ", filtrados)
    setNuevoPokemon({
      ...nuevoPokemon,
      type: filtrados,
    });
    
    setValidacion(
      validaciones({
        ...nuevoPokemon,
        type:[...filtrados]
      })
    );
    console.log("ACA ESTA ELIMINAR TIPOS ", filtrados)
  };
 

  const handlerCraerPokemon = (e) => {
    e.preventDefault();
    console.log("ACA ESTA VALIDACION DE CREARPOKEMON ", validacion);
    if (Object.keys(validacion).length) {
      alert("todos los campos son requeridos");
    } else {
      if (Object.keys(validaciones(nuevoPokemon)).length) {
        alert("los campos nue pueden estar vacios");
      } else {
        crearPokemon(nuevoPokemon)
          .then(() => {
            setCreadoDefinitivo("creado");
          })
          .catch(() => {
            setCreadoDefinitivo("noCreado");
          });
      }
    }
  };
  //VALIDACIONES
  const [validacion, setValidacion] = useState({});

  function validaciones(nuevoPokemon) {
    let validar = {};
    let verificarQueNoContNumero = /[1-9]/;
    let verificarQueNoTegaEspacio = /[\s]/;

    if (verificarQueNoTegaEspacio.test(nuevoPokemon.name))
      validar.name = "No puede contener espacios";
    if (
      pokemones.find(
        (ele) => ele.name.toUpperCase() === nuevoPokemon.name.toUpperCase()
      )
    ) {
      const pokemonFiltrado = pokemones.find(
        (ele) => ele.name.toUpperCase() === nuevoPokemon.name.toUpperCase()
      );
      validar.name = (
        <Link to={`/detalle/${pokemonFiltrado.id}`}>
          Ya tenemos este pokemon en nuestra base de datos. Quieres ver a{" "}
          {pokemonFiltrado.name}
        </Link>
      );
    }

    if (nuevoPokemon.name.length < 2)
      validar.name = "Necesita tener un minimo de 2 caracteres";
    if (nuevoPokemon.name.length > 15)
      validar.name = "Tiene que tener un minimo de 15 caracteres";
    if (verificarQueNoContNumero.test(nuevoPokemon.name))
      validar.name = "No puede contener Numeros";

    if (Number(nuevoPokemon.vida) < 20) 
      validar.vida = "tiene que ser una vida mayor a 20";
    if (Number(nuevoPokemon.vida) > 100)
      validar.vida = "tiene que ser una vida menor a 100";

    if (Number(nuevoPokemon.Altura) < 20)
      validar.Altura = "tiene que ser una Altura mayor a 20";
    if (Number(nuevoPokemon.Altura) > 100)
      validar.Altura = "tiene que ser una Altura menor a 100";

    if (Number(nuevoPokemon.Ataque) < 20)
      validar.Ataque = "tiene que ser un Ataque mayor a 20";
    if (Number(nuevoPokemon.Ataque) > 100)
      validar.Ataque = "tiene que ser un Ataque menor a 100";

    if (Number(nuevoPokemon.Defensa) < 20)
      validar.Defensa = "tiene que ser una Defensa mayor a 20";
    if (Number(nuevoPokemon.Defensa) > 100)
      validar.Defensa = "tiene que ser una defensa menor a 100";

    if (Number(nuevoPokemon.Velocidad) < 20)
      validar.Velocidad = "tiene que ser una Velocidad mayor a 20";
    if (Number(nuevoPokemon.Velocidad) > 100)
      validar.Velocidad = "tiene que ser una Velocidad menor a 100";

    if (Number(nuevoPokemon.Peso) < 20)
      validar.Peso = "tiene que ser un peso mayor a 20";
    if (Number(nuevoPokemon.Peso) > 100)
      validar.Peso = "tiene que ser un peso menor a 100";

    if (!nuevoPokemon.img.includes("https://"))
      validar.img = "Debe comenzar con https://";

    if (!nuevoPokemon.type.length)
      validar.type = "Debe contener al menos un tipo";
    return validar;
  }

  return (
    <div>
      <BarraDeNavegacion />
      <div className={style.contenedor}>
        <form className={style.contenedorForm} onSubmit={handlerCraerPokemon}>
          <div className={style.form}>
            <label>
              Nombre
              <input
                id="nombreInput"
                type="text"
                name="name"
                value={nuevoPokemon.name}
                placeholder="Escribe el Nombre"
                onChange={(e) => handlerInput(e)}
              />
            </label>

            {validacion.name ? (
              <p className={style.validacion}>{validacion.name}</p>
            ) : (
              <p className={style.validacion}> </p>
            )}
          </div>

          <div className={style.form}>
            <label>
              Vida
              <input
                type="number"
                name="vida"
                value={nuevoPokemon.vida}
                onChange={(e) => handlerInput(e)}
                placeholder="Coloque la vida"
              />
            </label>
            {validacion.vida ? (
              <p className={style.validacion}>{validacion.vida}</p>
            ) : (
              <p className={style.validacion}> </p>
            )}
          </div>

          <div className={style.form}>
            <label>
              Altura
              <input
                type="number"
                name="Altura"
                value={nuevoPokemon.Altura}
                onChange={(e) => handlerInput(e)}
                placeholder="Coloque Vida Minima"
              />
            </label>
            {validacion.Altura ? (
              <p className={style.validacion}>{validacion.Altura}</p>
            ) : (
              <p className={style.validacion}> </p>
            )}
          </div>

          <div className={style.form}>
            <label>
              Ataque
              <input
                type="number"
                name="Ataque"
                value={nuevoPokemon.Ataque}
                onChange={(e) => handlerInput(e)}
                placeholder="Coloque Ataque Minima"
              />
            </label>
            {validacion.Ataque ? (
              <p className={style.validacion}>{validacion.Ataque}</p>
            ) : (
              <p className={style.validacion}> </p>
            )}
          </div>

          <div className={style.form}>
            <label>
              Defensa
              <input
                type="number"
                name="Defensa"
                value={nuevoPokemon.Defensa}
                onChange={(e) => handlerInput(e)}
                placeholder="Coloque Defensa Minima"
              />
            </label>
            {validacion.Defensa ? (
              <p className={style.validacion}>{validacion.Defensa}</p>
            ) : (
              <p className={style.validacion}> </p>
            )}
          </div>

          <div className={style.form}>
            <label>
              Velocidad
              <input
                type="number"
                name="Velocidad"
                value={nuevoPokemon.Velocidad}
                onChange={(e) => handlerInput(e)}
                placeholder="Coloque Velocidad Minima"
              />
            </label>
            {validacion.Velocidad ? (
              <p className={style.validacion}>{validacion.Velocidad}</p>
            ) : (
              <p className={style.validacion}> </p>
            )}
          </div>

          <div className={style.form}>
            <label>
              Peso
              <input
                type="number"
                name="Peso"
                value={nuevoPokemon.Peso}
                onChange={(e) => handlerInput(e)}
                placeholder="Coloque Peso Minimo"
              />
            </label>
            {validacion.Peso ? (
              <p className={style.validacion}>{validacion.Peso}</p>
            ) : (
              <p className={style.validacion}> </p>
            )}
          </div>

          <div className={style.form}>
            <label>
              Imagen
              <input
                type="text"
                name="img"
                value={nuevoPokemon.img}
                onChange={(e) => handlerInput(e)}
                placeholder="Coloque su imagen aquí"
              />
            </label>
            {validacion.img ? (
              <p className={style.validacion}>{validacion.img}</p>
            ) : (
              <p className={style.validacion}> </p>
            )}
          </div>

          <div className={style.form}>
            <label>
              Selecciona un tipo:
              <select
                defaultValue={"default"}
                onChange={(e) => handlerSeleccionarTipo(e)}
              >
                <option value="default">Elegir Tipo</option>
                {tipos &&
                  tipos.map((elemento) => {
                    return (
                      <option key={elemento.name} value={elemento.name}>
                        {elemento.name}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>
          <div>
            <ul>
              {nuevoPokemon.type.length > 0 ? (
                nuevoPokemon.type.map((ele) => (
                  <li key={ele} onClick={(e) => handlerEliminarTipo(e)}>
                    {ele}
                  </li>
                ))
              ) : (
                <p className={style.validacion}>{validacion.type}</p>
              
              )}
            </ul>
          </div>
          <div>
            <button
              className={style.boton}
              onClick={(e) => {
                handlerCraerPokemon(e);
              }}
            >
              Crear Otro Pokemon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreandoPoke;
