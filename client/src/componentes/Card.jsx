import React from 'react'
import { Link } from 'react-router-dom'
import style from "./style/card.module.css"

const Card = ({name, img, types}) => {
  return (
    <div className={style.cardConten}>
        <Link className={style.link} to="/detalle/:id">
            <img className={style.img} src={img} alt={name}/>
            <h2>{name}</h2>
            {
              types && types.map((tipo, i)=>(
                <p key={i}>{tipo.name}</p>
              ))
            }
        </Link> 
    </div>
  )
}

export default Card