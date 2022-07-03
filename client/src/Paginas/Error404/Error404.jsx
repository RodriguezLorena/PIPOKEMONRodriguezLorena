import React from 'react'
import { Link } from 'react-router-dom'
import style from "./error404.module.css"

const Error404 = () => {
  return (
    <div className={style.contenedor}>
      <h1 className={style.titulo}>error 404</h1>
      <p className={style.parrafo1}>Uyyy, parece que nos hemos perdido en esta Aventura.</p>
     <p className={style.parrafo}> No te preocupes todos cometemos errores en el camino... yo cometi muchos en este proyecto 🙈​🙉​🙊​</p>
      <p className={style.span}>quieres probar con este Link?? ➡️
      <Link to="/home" className={style.link}>Ir a la home</Link>
      </p>
    </div>
  )
}

export default Error404