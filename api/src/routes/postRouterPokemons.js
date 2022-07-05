const {Router}=require("express")

const {Type,Pokemon }=require("../db")


const routerPostPokemon=Router()

routerPostPokemon.post("/", async(req, res)=>{
    console.log("ACA ESTA POST ",  req.body)
    try {
        const { name, vida, Ataque, Defensa, Velocidad, Altura, Peso, img, type}= req.body
      
        const crearPokemon= await Pokemon.create({

            name,
            vida,
            Ataque,
            Defensa,
            Velocidad,
            Altura,
            Peso,
            img, 
            
        })

        const tiposDb= await Type.findAll({
            where:{name:type},
        })
            
      

        await crearPokemon.addType(tiposDb)
        res.send("poke creado con exito")
    } catch (error) {
        console.log(error)
        res.status(406).send("Pokemon no aceptable")
    }

})

module.exports={routerPostPokemon}
