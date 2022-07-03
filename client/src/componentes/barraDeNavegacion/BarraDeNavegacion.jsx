import React from "react";
import { Link } from "react-router-dom";
import style from "./barraDeNavegacion.module.css";
import logo from "../../imagenes/pokemon.jpg";
import creacion from "../../imagenes/crear.png";
import { useLocation } from "react-router-dom";

const BarraDeNavegacion = () => {
  let locacion = useLocation();
  console.log(locacion);
  if (locacion.pathname === "/home") {
    return (
      <div className={style.contenedor}>
        <Link to="/">
          <img className={style.logo} src={logo} alt="logo" />
        </Link>
        <Link className={style.link} to="/create">
          <img className={style.create} src={creacion} alt="crear" />
          <p className={style.crearText}>Has un nuevo Pokemon</p>
        </Link>
      </div>
    );
  } else {
    return (
      <div className={style.contenedor}>
        <Link to="/">
          <img className={style.logo} src={logo} alt="logo" />
        </Link>
        <Link to="/home" className={style.volver}>
          volver a la home
        </Link>
      </div>
    );
  }
};

export default BarraDeNavegacion;
