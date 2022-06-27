import React from 'react'
import { Link } from 'react-router-dom'
import style from "./style/card.module.css"

const Card = ({name, img, types, id}) => {
  return (
    <div className={style.cardConten}>
        <Link to={`/detalle/${id}`} className={style.link}>
            <span className={style.span}>Nombre:</span>
            <h2 className={style.nombre}>{name}</h2>
            <img className={style.img} src={img} alt={name}/>
            <span className={style.span}>Tipo:</span>   
            {
              types && types.map((tipo, i)=>(
                <p className={style.tipos} key={i}>{tipo.name}</p>
              ))
            }
        </Link> 
    </div>
  )
}

export default Card