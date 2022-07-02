import React from 'react'
import { Link } from 'react-router-dom'
import style from "./style/error404.module.css"
const Error404 = () => {
  return (
    <div className={style.contenedor}>
      <h1>ERROR 404</h1>
      <p>No te preocupes, todos cometemos errores</p>
      <span>quieres probar con este Link??</span>
      <Link to="/home"/>

    </div>
  )
}

export default Error404