import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name, image, type}) => {
  return (
    <div>
        <h1>ESTO ES CARD</h1>
        {/* <Link to="/detalle/:id">
            <img src="{image}" alt={name}/>
            <h2>{name}</h2>
            <p>{type}</p>
        </Link> */}
    </div>
  )
}

export default Card