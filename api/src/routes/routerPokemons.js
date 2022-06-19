const {Router}= require("express")
const { todosLosPokemones, ambosDatos} = require("../controles/controlesPokemon")




const routerPokemons= Router();

routerPokemons.get("/", async(req, res)=>{
    const todosLosPoke= await ambosDatos()
   
    const {name}=req.query
    if(name){
        let nombrePoke= todosLosPoke.find((elemento)=> elemento.name == name)
        res.status(200).send(nombrePoke)
    }else{
        res.status(200).send(todosLosPoke)
    }
    
})

routerPokemons.get("/:id", async(req, res)=>{
    try {
        const {id}=req.params;
        const todosLosPoke=await ambosDatos()

        const pokePorId=todosLosPoke.find((ele)=> ele.id == id)

        if(pokePorId){
            res.status(200).send(pokePorId)
        }else{
            res.status(401).send("no existe el pokemon")
        }
    } catch (error) {
        console.log(error)
    }
})


module.exports= {routerPokemons}