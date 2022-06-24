import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Paginas/style/landing.module.css"

const Landing = () => {
  return (
    <div className={style.landing}>
      <h1 className={style.titulo}>Sumate a esta aventura y se el mejor maestro Pokemon</h1>
      <p className={style.span}>Un proyecto hecho con mucho mate 🧉​ y amor ❤️</p>
      <div className={style.botonConten}>
        <Link className={style.boton} to="/home">Atrapalos ya</Link>
      </div>
    </div>
  )
}

export default Landing