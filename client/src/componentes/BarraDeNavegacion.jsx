import React from 'react'
import { Link } from 'react-router-dom'
import style from "./style/barraDeNavegacion.module.css"
import logo from "../imagenes/logo.png"
import creacion from "../imagenes/crear.png"


const BarraDeNavegacion = () => {
  return (
    <div className={style.contenedor}>
        <Link to="/">
            <img className={style.logo} src={logo} alt="logo"/>
        </Link>
        <Link className={style.link} to="/create">
            <img className={style.create} src={creacion} alt="crear"/>
            <p className={style.crearText}>Has un nuevo Pokemon</p>
        </Link>
    </div>
  )
}

export default BarraDeNavegacion