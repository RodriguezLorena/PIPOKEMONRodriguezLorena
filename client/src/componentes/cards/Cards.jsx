import Card from "../card/Card";
import style from "./cards.module.css"


const Cards = ({listaDePokemon}) => {
    // {console.log(listaDePokemon[0])}
  return (
    <div className={style.contenedor}>
       {
        listaDePokemon && listaDePokemon.map((poke)=>( 
                <div key={poke.id}>
                    <Card name={poke.name} img={poke.img} types={poke.types} id={poke.id}/>
                </div>
            )
        )
       }
    </div>
  )
}

export default Cards