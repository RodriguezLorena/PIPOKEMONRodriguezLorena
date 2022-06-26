import Card from "./Card";


const Cards = ({pokemones}) => {
    {console.log(pokemones[0])}
  return (
    <div>
       {
        pokemones && pokemones.map((poke)=>( 
                <div key={poke.id}>
                    <Card name={poke.name} img={poke.img} types={poke.types}/>
                </div>
            )
        )
       }
    </div>
  )
}

export default Cards