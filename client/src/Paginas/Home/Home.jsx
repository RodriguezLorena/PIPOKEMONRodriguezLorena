import React from "react";
import Cards from "../../componentes/cards/Cards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { traerLosPokemones } from "../../redux/actions";
import style from "./home.module.css";
import Encabezado from "../../componentes/encabezado/Encabezado";
import Loading from "../../componentes/loading/Loading";
import BarraDeNavegacion from "../../componentes/barraDeNavegacion/BarraDeNavegacion";

const Home = () => {
  const dispatch = useDispatch();
  const pokemones = useSelector((state) => state.pokemons);
  console.log(pokemones);

  useEffect(() => {
    dispatch(traerLosPokemones());
  }, [dispatch]);

  //inicio del paginado
  const [currentPage, setCurrentPage] = useState(1);

  const cantidadPorPagina = 12;
  const indiceUno = currentPage * cantidadPorPagina;
  const ultimoIndice = indiceUno - cantidadPorPagina;

  const listaDePokemon = pokemones.slice(ultimoIndice, indiceUno);

  const cambiarDepagina = () => {
    if (currentPage >= Math.ceil(pokemones.length / cantidadPorPagina)) return;
    setCurrentPage(currentPage + 1);
  };
  const volverAlaAnterior = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const paginas = (numPag) => {
    setCurrentPage(numPag);
  };

  let numeroDePaginas = [];
  for (let i = 1; i <= Math.ceil(pokemones.length / cantidadPorPagina); i++) {
    numeroDePaginas.push(i);
  }
  return (
    <>
      {pokemones.length > 0 ? (
        <div className={style.contenedorGeneral}>
          <BarraDeNavegacion />
          <Encabezado setCurrentPage={setCurrentPage} />
          <div className={style.contenedorPaginado}>
            <button className={style.boton} onClick={volverAlaAnterior}>
              Pagina anterior
            </button>
            {numeroDePaginas &&
              numeroDePaginas.map((num) => {
                return num !== currentPage ? (
                  <button
                    className={style.pag}
                    key={num}
                    onClick={() => paginas(num)}
                  >
                    {num}
                  </button>
                ) : (
                  <button
                    className={style.pagCurrent}
                    key={num}
                    onClick={() => paginas(num)}
                  >
                    {num}
                  </button>
                );
              })}
            <button className={style.boton} onClick={cambiarDepagina}>
              Pagina siguiente
            </button>
          </div>
          <div className={style.fondo}>
            <Cards listaDePokemon={listaDePokemon} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
