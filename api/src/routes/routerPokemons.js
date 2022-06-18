const {Router}= require("express")
const {todosLosPokemones} = require("../controles/controlesPokemon")




const routerPokemons= Router();

routerPokemons.get("/", async(req, res)=>{
    const todosLosPoke= await todosLosPokemones()
    res.status(200).send(todosLosPoke)
    // const {name}=req.query
    // if(name){
    //     let nombrePoke= todosLosPoke.find((elemento)=> elemento.name == name)
    //     res.status(200).send(nombrePoke)
    // }else{
    //     res.status(200).send(todosLosPoke)
    // }
    
})


module.exports= {routerPokemons}